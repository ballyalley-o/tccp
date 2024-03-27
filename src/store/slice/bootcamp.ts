import { apiSlice } from './api'
import { ServerPath } from 'route/path'

export const bootcampApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBootcamp: builder.query<any, void>({
      query: () => ({
        url: ServerPath.BOOTCAMP
      }),
      keepUnusedDataFor: 5
    }),
    getBootcamp: builder.query<any, string>({
      query: (id) => ({
        url: ServerPath.BOOTCAMP_ID(id)
      })
    })
  })
})

export const { useGetAllBootcampQuery, useGetBootcampQuery } = bootcampApiSlice
