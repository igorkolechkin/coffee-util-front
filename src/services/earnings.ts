import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from './index'
import { Earnings } from '../types/earnings'

export const earningsApi = createApi({
  reducerPath: 'earningsApi',
  tagTypes: ['Earnings'],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getEarnings: builder.query<Earnings, { id: string, month: string }>({
      query: ({ id, month }) => `earnings/?storage_id=${id}&month=${month}`,
      providesTags: result => ['Earnings']
    }),
    addEarnings: builder.mutation<string, Earnings>({
      query: body => ({
        url: 'earnings',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Earnings']
    })
  })
})

export const { useGetEarningsQuery, useAddEarningsMutation } = earningsApi