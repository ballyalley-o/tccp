import { apiSlice } from './api'
import { ServerPath } from 'route/path'

export const bootcampApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBootcamp: builder.query<any, void>({
      query: () => ({
        url: ServerPath.BOOTCAMP
      }),
      keepUnusedDataFor: 5
    })
  })
})

export const { useGetAllBootcampQuery } = bootcampApiSlice
