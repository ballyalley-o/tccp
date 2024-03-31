import { LOCAL_STORAGE } from 'constant'
import React, { FC, createContext, useEffect, useState, useMemo, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createAsyncThunk } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { setCredential } from 'store/slice/auth'
import { useLogoutMutation } from 'store/slice/auth'
import localStorageSpace from 'util/local-storage-space'
import { isValidToken, setSession } from 'auth/utility'
import { AuthPath } from 'route/path'
import { RESPONSE } from 'constant'

export const AuthContext = createContext<{
  isAuthenticated: boolean
  user: User | null
  login?: (credentials: { email: string; name: string; token: string; password: string }) => void
  logout?: () => void
} | null>(null)

interface AuthProviderProps {
  children: React.ReactNode
}

interface User {
  avatar: string
  email: string
  firstname: string
  lastname: string
  _id: string
  role: string
  username: string
  location: string
  updatedAt: string
  createdAt: string
}

interface RootState {
  auth: {
    user: any | null
  }
}
export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { user } = useSelector((state: RootState) => state.auth?.user || {})
  const [logoutMutation] = useLogoutMutation()
  const dispatch = useDispatch()

  const storageAvailable = useMemo(() => localStorageSpace(), [])

  const token = storageAvailable ? localStorage.getItem(LOCAL_STORAGE.TOKEN) : ''

  if (token && isValidToken(token)) {
    setSession(token)
  }

  useEffect(() => {
    const expirationTime = localStorage.getItem('expirationTime')
    if (expirationTime && new Date().getTime() < parseInt(expirationTime, 10)) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
      dispatch(setCredential({ email: '', name: '', token: '', password: '' }))
      localStorage.removeItem('expirationTime')
    }
  }, [dispatch])

  // Clear All persisted data and remove Items from localStorage
  const clearAllPersistedStates = createAsyncThunk('auth/clearAllPersistedStates', async (_, { dispatch }) => {
    try {
      setSession(null)
      localStorage.removeItem(LOCAL_STORAGE.NAME)
      localStorage.removeItem(LOCAL_STORAGE.EMAIL)
      localStorage.removeItem(LOCAL_STORAGE.TOKEN)
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
    (credentials: { email: string; password: string; name: string; token: string }) => {
      dispatch(setCredential(credentials))
      setIsAuthenticated(true)
    },
    [dispatch]
  )

  const logout = useCallback(async () => {
    try {
      await dispatch(clearAllPersistedStates() as any)
      setIsAuthenticated(false)
    } catch (error) {
      console.error(error)
    }
  }, [dispatch])

  const memoizedValue = useMemo(
    () => ({
      isAuthenticated,
      user: user || null,
      login,
      logout
    }),
    [isAuthenticated, login, logout]
  )

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>
}
