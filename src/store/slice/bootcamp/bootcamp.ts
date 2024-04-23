import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  initial: false,
  responseMessage: null,
  isLoading: false,
  success: false,
  error: null,
  user: null,
  allBootcamp: [],
  bootcamp: {},
  allCourse: [],
  course: {}
}

const bootcampSlice = createSlice({
  name: 'bootcamp',
  initialState,
  reducers: {
    setInitial(state, action) {
      const { initial, isAuthenticated } = action.payload
      state.initial = initial
    },
    setBootcamps(state, action) {
      state.allBootcamp = action.payload
    },
    setBootcamp(state, action) {
      const { bootcamp } = action.payload
      state.success = true
      state.isLoading = false
      state.responseMessage = action.payload.message
      state.bootcamp = action.payload
    },
    setCourses(state, action) {
      state.allCourse = action.payload
    },
    setCourse(state, action) {
      state.course = action.payload
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
    setResetAllBootcamp(state, action) {
      state.allBootcamp = []
      state.responseMessage = null
      state.success = false
      state.isLoading = false
    },
    setResetAllCourse(state, action) {
      state.allBootcamp = []
      state.responseMessage = null
      state.success = false
      state.isLoading = false
    },
    clearError(state, action) {
      state.isLoading = false
      state.error = null
    }
  }
})

export default bootcampSlice.reducer

export const {
  setInitial,
  setBootcamps,
  setBootcamp,
  setCourses,
  setCourse,
  setLoading,
  stopLoading,
  hasError,
  setResetBootcamp,
  setResetAllBootcamp,
  setResetAllCourse,
  clearError
} = bootcampSlice.actions
