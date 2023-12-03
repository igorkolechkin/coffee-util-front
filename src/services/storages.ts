import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from './index'
import { StorageInfoType, StorageType } from '../types/storages'

export const storagesApi = createApi({
  reducerPath: 'storagesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Storages'],
  endpoints: builder => ({
    getStorage: builder.query<StorageInfoType, string>({
      query: (id: string) => `storages/${id}`,
      providesTags: result => ['Storages']
    }),
    getStorages: builder.query<StorageType[], string>({
      query: () => `storages`,
      providesTags: result => ['Storages']
    }),
    addStorages: builder.mutation<string, StorageType[]>({
      query: body => ({
        url: 'storages',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Storages']
    })
  })
})

export const { useGetStorageQuery, useGetStoragesQuery, useAddStoragesMutation } = storagesApi