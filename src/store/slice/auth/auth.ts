import { createSlice } from '@reduxjs/toolkit'
import { LOCAL_STORAGE } from 'constant'

const initialState = {
  isInitialized: false,
  isAuthenticated: false,
  user: null,
  token: null
}

const authSlice = createSlice({
  name: LOCAL_STORAGE.AUTH,
  initialState,
  reducers: {
    setInitial(state, action) {
      const { isInitialized, isAuthenticated, user } = action.payload

      state.isInitialized = isInitialized
      state.isAuthenticated = isAuthenticated
      state.user = user
    },
    setCredential(state, action) {
      const { isAuthenticated, user, token } = action.payload

      state.isAuthenticated = isAuthenticated
      state.user = user
      state.token = token

      if (isAuthenticated) {
        localStorage.setItem(LOCAL_STORAGE.USER, JSON.stringify(user))
        const expiration = new Date().getTime() + 3600 * 1000

        localStorage.setItem(LOCAL_STORAGE.TOKEN, token)
        localStorage.setItem(LOCAL_STORAGE.EXPIRATION, expiration.toString())
        localStorage.setItem(LOCAL_STORAGE.USER, JSON.stringify(user))
      }
    },

    logout(state) {
      state.isInitialized = false
      state.isAuthenticated = false
      state.user = null
      localStorage.removeItem(LOCAL_STORAGE.USER)
      localStorage.removeItem(LOCAL_STORAGE.TOKEN)
      localStorage.removeItem(LOCAL_STORAGE.EXPIRATION)
    }
  }
})

export const { setInitial, setCredential, logout } = authSlice.actions
export default authSlice.reducer
