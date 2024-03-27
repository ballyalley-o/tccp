import React, { FC, createContext, useEffect, useState, useMemo, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCredential, logout as asyncLogout } from 'store/slice/auth'

export const AuthContext = createContext<{
  isAuthenticated: boolean
  login: (credentials: { email: string; name: string; token: string; password: string }) => void
  logout: () => void
} | null>(null)

interface AuthProviderProps {
  children: React.ReactNode
}

interface RootState {
  auth: {
    userInfo: any
  }
}
export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const dispatch = useDispatch()

  const userInfo = useSelector((state: RootState) => state.auth)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const expirationTime = localStorage.getItem('expirationTime')
    if (expirationTime && new Date().getTime() < parseInt(expirationTime, 10)) {
      setIsAuthenticated(true)
    } else {
      dispatch(logout() as any)
    }
  }, [dispatch])

  const login = useCallback(
    (credentials: { email: string; password: string; name: string; token: string }) => {
      dispatch(setCredential(credentials))
      setIsAuthenticated(true)
    },
    [dispatch]
  )

  const logout = useCallback(() => {
    try {
      dispatch(asyncLogout())
      setIsAuthenticated(false)
    } catch (error) {
      console.error(error)
    }
  }, [dispatch])

  const memoizedValue = useMemo(
    () => ({
      isAuthenticated: isAuthenticated,
      login,
      logout
    }),
    [isAuthenticated, login, logout]
  )

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>
}
