// import goodlog from 'good-logs'
import { createSlice } from '@reduxjs/toolkit'
import axiosInstance from 'util/axios'
import { ServerPath } from 'route/path'
import { GLOBAL } from 'config'

const initialState = {
  initial: false,
  responseMessage: null,
  isLoading: false,
  success: false,
  bootcampFeedback: [],
  error: null,
  currentPage: 1,
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
    setCurrentPage(state, action) {
      state.currentPage = action.payload
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
    getBootcampFeedback(state, action) {
      state.isLoading = false
      state.success = true
      state.bootcampFeedback = action.payload
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

export default bootcampSlice.reducer

export const {
  setInitial,
  setCurrentPage,
  setBootcamps,
  setBootcamp,
  setCourses,
  setCourse,
  setLoading,
  stopLoading,
  hasError,
  getBootcampFeedback,
  setResetBootcamp,
  setResetAllBootcamp,
  setResetAllCourse,
  clearError,
  resetBootcampFeedback
} = bootcampSlice.actions

export function getBootcampFeedbackThunk(bootcampId: any) {
  return async (dispatch: any) => {
    dispatch(bootcampSlice.actions.setLoading({}))
    try {
      const response = await axiosInstance.get(GLOBAL.APP_SERVER + `/bootcamp/${bootcampId}/feedback`)

      dispatch(getBootcampFeedback(response?.data))
    } catch (error) {
      dispatch(hasError(error))
      console.error('bgRed', error)
    }
  }
}
