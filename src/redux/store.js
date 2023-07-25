import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlice } from './apiSlice'
import cartReducer  from "./cartSlice"

export const store = configureStore({
  reducer: {
    cart : cartReducer, 
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});


setupListeners(store.dispatch)