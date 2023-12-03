import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from './services/products'
import { storagesApi } from './services/storages'
import { storagesQuantityApi } from './services/storagesQuantity'

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [storagesApi.reducerPath]: storagesApi.reducer,
    [storagesQuantityApi.reducerPath]: storagesQuantityApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware()
    .concat(productsApi.middleware, storagesApi.middleware, storagesQuantityApi.middleware)
})