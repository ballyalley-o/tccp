import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import thunk from 'redux-thunk'
import { authReducer, apiSlice } from './slice'
import { GLOBAL } from 'config'
import { KEY } from 'constant'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore, PERSIST, REHYDRATE } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [apiSlice.reducerPath],
  whitelist: [authReducer.name],
  blackboxWarning: true,
  blackboxActions: [PERSIST, REHYDRATE]
}
const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, REHYDRATE]
      }
    }).concat(apiSlice.middleware),

  devTools: GLOBAL.APP_ENV !== KEY.PRODUCTION
})

const persistor = persistStore(store)
setupListeners(store.dispatch)

export { store, persistor }
