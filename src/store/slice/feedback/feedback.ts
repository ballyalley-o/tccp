import { createSlice } from '@reduxjs/toolkit'
import axiosInstance from 'util/axios'
import { GLOBAL } from 'config'

const initialState = {
  initial: false,
  responseMessage: null,
  isLoading: false,
  success: false,
  bootcampFeedback: [],
  error: null,
  currentPage: 1,
  feedback: null,
  user: null,
  course: {},
  bootcamp: {},
  allFeedback: [],
  allCourse: []
}

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    setInitial(state, action) {
      const { initial, isAuthenticated } = action.payload
      state.initial = initial
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },
    setBootcamp(state, action) {
      const { bootcamp } = action.payload
      state.success = true
      state.isLoading = false
      state.responseMessage = action.payload.message
      state.bootcamp = action.payload
    },
    getFeedback(state, action) {
      state.feedback = action.payload
    },
    getAllFeedback(state, action) {
      state.allFeedback = action.payload
    },
    getBootcampFeedback(state, action) {
      state.isLoading = false
      state.success = true
      state.bootcampFeedback = action.payload
    },
    setLoading(state, action) {
      state.isLoading = true
    },
    stopLoading(state, action) {
      state.isLoading = false
    },
    hasError(state, action) {
      state.isLoading = false
      state.error = action.payload
      state.initial = true
    },
    setResetBootcamp(state, action) {
      state.bootcamp = {}
      state.responseMessage = null
      state.success = false
      state.isLoading = false
    },
    setResetAllFeedback(state, action) {
      state.allFeedback = []
      state.success = false
      state.isLoading = false
    },
    resetBootcampFeedback(state) {
      state.bootcampFeedback = []
      state.success = false
      state.isLoading = false
    },
    clearError(state, action) {
      state.isLoading = false
      state.error = null
    }
  }
})

export default feedbackSlice.reducer

export const {
  setInitial,
  setCurrentPage,
  setBootcamp,
  getFeedback,
  getAllFeedback,
  setLoading,
  stopLoading,
  hasError,
  getBootcampFeedback,
  setResetBootcamp,
  setResetAllFeedback,
  clearError,
  resetBootcampFeedback
} = feedbackSlice.actions
