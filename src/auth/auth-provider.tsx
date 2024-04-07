import { LOCAL_STORAGE } from 'constant'
import React, { FC, createContext, useEffect, useState, useMemo, useCallback } from 'react'
import { createAsyncThunk } from '@reduxjs/toolkit'
import localStorageSpace from 'util/local-storage-space'
import storage from 'redux-persist/lib/storage'
import { setInitial, setCredential } from 'store/slice/auth'
import { useLoginMutation, useLogoutMutation } from 'store/slice/auth/endpoint'
import { isValidToken, setSession } from 'auth/utility'
import { AuthPath } from 'route/path'
import { RESPONSE } from 'constant'
import { useSelector, dispatch } from 'store'

export const AuthContext = createContext<{
  isAuthenticated: boolean
  user: User | null
  login?: (credentials: { email: string; name: string; token: string; password: string }) => void
  logout?: () => void
} | null>(null)

interface AuthProviderProps {
  children: React.ReactNode
}

interface RootState {
  auth: {
    user: any | null
    isAuthenticated: boolean
  }
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth || {})
  const [logoutCall] = useLogoutMutation()
  const [loginCall, { isLoading }] = useLoginMutation()

  const storageAvailable = useMemo(() => localStorageSpace(), [])

  const token = storageAvailable ? localStorage.getItem(LOCAL_STORAGE.TOKEN) : ''

  if (token && isValidToken(token)) {
    setSession(token)
  }

  // useEffect(() => {
  //   const expirationTime = localStorage.getItem('expirationTime')
  //   const user = JSON.parse(localStorage.getItem(LOCAL_STORAGE.USER) || '{}')

  //   if (user.user !== null) {
  //     dispatch(setCredential({ user: null, isAuthenticated: false, token: null, isInitialized: false }))
  //     localStorage.removeItem('expirationTime')
  //   } else {
  //     console.log('user', user)
  //     setIsAuthenticated(false)
  //     dispatch(setCredential({ user: null, isAuthenticated: false, token: null, isInitialized: false }))
  //   }
  // }, [dispatch])

  const initialize = useCallback(async () => {
    try {
      const token = storageAvailable ? localStorage.getItem(LOCAL_STORAGE.TOKEN) : ''

      if (token && isValidToken(token)) {
        setSession(token)

        dispatch(
          setInitial({
            isInitialized: true,
            user,
            isAuthenticated
          })
        )
      } else {
        dispatch(
          setInitial({
            isInitialized: false,
            isAuthenticated: false,
            user: null
          })
        )
      }
    } catch (error) {
      console.error(error)
      dispatch(
        setInitial({
          isInitialized: false,
          isAuthenticated: false,
          user: null
        })
      )
    }
  }, [storageAvailable, dispatch])

  useEffect(() => {
    initialize()
  }, [initialize])

  // clear All persisted data and remove Items from localStorage
  const clearAllPersistedStates = createAsyncThunk('auth/clearAllPersistedStates', async (_, { dispatch }) => {
    try {
      setSession(null)
      localStorage.removeItem(LOCAL_STORAGE.USER)
      localStorage.removeItem(LOCAL_STORAGE.TOKEN)
      localStorage.removeItem(LOCAL_STORAGE.EXPIRATION)
      window.location.href = AuthPath.LOG_IN
      const keys = Object.keys(localStorage)
      const reduxPersistKeys = keys.filter(
        (key) => !(key === LOCAL_STORAGE.REMEMBER || key === LOCAL_STORAGE.USER_EMAIL || key === LOCAL_STORAGE.USER_PASSWORD)
      )
      await Promise.all(reduxPersistKeys.map((key) => storage.removeItem(key)))
    } catch (error) {
      console.error(RESPONSE.error.REDUX_PERSIST, error)
    }
  })

  const login = useCallback(
    async (credentials: { email: string; password: string; name?: string; token?: string }) => {
      const { email, password } = credentials
      const res = await loginCall({
        email,
        password
      }).unwrap()

      dispatch(setCredential({ isAuthenticated: true, ...(res || {}) }))
      // setIsAuthenticated(true)
    },
    [dispatch]
  )

  const logout = useCallback(async () => {
    try {
      await logoutCall({}).unwrap()
      await dispatch(clearAllPersistedStates() as any)
      await dispatch(setCredential({ isAuthenticated: false, user: null, token: null }))
    } catch (error) {
      console.error(error)
    }
  }, [dispatch])

  const memoizedValue = useMemo(
    () => ({
      isAuthenticated,
      user,
      login,
      logout
    }),
    [isAuthenticated, user, login, logout]
  )

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>
}
