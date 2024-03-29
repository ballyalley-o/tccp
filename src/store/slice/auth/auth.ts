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
      state.user = action.payload
      localStorage.setItem(LOCAL_STORAGE.USER, JSON.stringify(action.payload))

      const expirationTime = new Date().getTime() + 3600 * 1000
      localStorage.setItem('expirationTime', expirationTime.toString())
    },

    logout(state) {
      state.user = null
      localStorage.removeItem(LOCAL_STORAGE.USER)
      localStorage.removeItem('expirationTime')
    }
  }
})

export const { setCredential, logout } = authSlice.actions
export default authSlice.reducer
