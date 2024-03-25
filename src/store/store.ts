import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import { apiSlice } from './slice';
import { GLOBAL } from 'config';
import { KEY } from 'constant';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: GLOBAL.APP_ENV !== KEY.PRODUCTION
});

export default store;
