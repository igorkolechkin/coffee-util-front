import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from './index'
import { StorageQuantityDataType, StorageQuantityDataAddType } from '../types/storageQuantity'

export const storagesQuantityApi = createApi({
  reducerPath: 'storagesQuantityApi',
  tagTypes: ['StoragesQuantity'],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getStoragesQuantity: builder.query<StorageQuantityDataType[], { id: string, month: string }>({
      query: ({ id, month }) => `storage_quantity/${id}?month=${month}`,
      providesTags: result => ['StoragesQuantity']
    }),
    addStorageQuantity: builder.mutation<string, StorageQuantityDataAddType[]>({
      query: body => ({
        url: 'storage_quantity',
        method: 'POST',
        body
      }),
      invalidatesTags: ['StoragesQuantity']
    })
  })
})

export const { useGetStoragesQuantityQuery, useAddStorageQuantityMutation } = storagesQuantityApi