import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { useSelector as useAppSelector } from 'react-redux'
import { authReducer, apiSlice } from './slice'
import { GLOBAL } from 'config'
import { KEY } from 'constant'
import { persistStore, PERSIST, REHYDRATE } from 'redux-persist'
import rootReducer, { rootPersistConfig } from './root-reducer'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: GLOBAL.APP_ENV === KEY.PRODUCTION ? undefined : false,
      immutableCheck: false
    }).concat(apiSlice.middleware),

  devTools: GLOBAL.APP_ENV !== KEY.PRODUCTION
})

const persistor = persistStore(store)
const { dispatch } = store
const useSelector = useAppSelector
setupListeners(store.dispatch)

export { store, persistor, dispatch, useSelector }
