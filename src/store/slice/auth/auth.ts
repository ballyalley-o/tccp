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
    setCredential(state, action) {
      console.log('action.payload', action.payload)
      state.user = action.payload
      localStorage.setItem(LOCAL_STORAGE.USER, JSON.stringify(action.payload))

      const expirationTime = new Date().getTime() + 3600 * 1000
      localStorage.setItem('expirationTime', expirationTime.toString())
      state.isAuthenticated = true
    },

    logout(state) {
      state.user = null
      state.isAuthenticated = false
      localStorage.removeItem(LOCAL_STORAGE.USER)
      localStorage.removeItem('expirationTime')
    }
  }
})

export const { setCredential, logout } = authSlice.actions
export default authSlice.reducer
