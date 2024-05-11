import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { KEY } from 'constant'
import { apiSlice, authReducer, bootcampReducer, feedbackReducer } from './slice'

export const apiPersistConfig = {
  key: 'api',
  storage,
  keyPrefix: KEY.PERSIST_PREFIX,
  blacklist: ['endpoints']
}

export const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: KEY.PERSIST_PREFIX,
  blacklist: ['auth', 'user']
}

export const authPersistConfig = {
  key: 'auth',
  storage,
  keyPrefix: KEY.PERSIST_PREFIX,
  blacklist: ['error', 'initial', 'responseMessage']
}

export const userPersistConfig = {
  key: 'user',
  storage,
  keyPrefix: KEY.PERSIST_PREFIX,
  blacklist: ['error', 'initial', 'responseMessage']
}

export const bootcampPersistConfig = {
  key: 'bootcamp',
  storage,
  keyPrefix: KEY.PERSIST_PREFIX,
  blacklist: ['error', 'initial', 'responseMessage']
}

export const feedbackPersistConfig = {
  key: 'feedback',
  storage,
  keyPrefix: KEY.PERSIST_PREFIX,
  blacklist: ['error', 'initial', 'responseMessage']
}

export const coursePersistConfig = {
  key: 'course',
  storage,
  keyPrefix: KEY.PERSIST_PREFIX,
  blacklist: ['error', 'initial', 'responseMessage']
}

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: persistReducer(apiPersistConfig, apiSlice.reducer),
  auth: persistReducer(authPersistConfig, authReducer),
  bootcamp: persistReducer(bootcampPersistConfig, bootcampReducer),
  feedback: persistReducer(feedbackPersistConfig, feedbackReducer)
})

export default rootReducer
