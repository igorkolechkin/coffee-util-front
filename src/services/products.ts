import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from './index'
import { ProdutType } from '../types/products'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getProducts: builder.query<ProdutType[], string>({
      query: (id: string) => `products/?storage_id=${id}`,
      providesTags: result => ['Products']
    })
  })
})

export const { useGetProductsQuery } = productsApi