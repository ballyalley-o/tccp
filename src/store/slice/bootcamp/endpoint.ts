import { apiSlice } from 'store/slice/api'
import { ServerPath } from 'route/path'
import { METHOD } from 'constant'

const { GET, POST, PUT, DELETE } = METHOD

export const bootcampSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBootcamp: builder.query<GetAllResponse, void>({
      query: () => ({
        url: ServerPath.BOOTCAMP
      }),
      keepUnusedDataFor: 5
    }),
    getBootcamp: builder.query({
      query: (id) => ({
        url: ServerPath.BOOTCAMP_ID(id),
        method: GET
      })
    }),
    createBootcamp: builder.mutation({
      query: (data: any) => ({
        url: ServerPath.BOOTCAMP,
        method: POST,
        body: data
      }),
      invalidatesTags: ['Bootcamp']
    }),
    updateBootcamp: builder.mutation({
      query: (data: any) => ({
        url: ServerPath.BOOTCAMP_ID(data.id),
        method: PUT,
        body: data
      }),
      invalidatesTags: ['Bootcamp']
    }),
    deleteBootcamp: builder.mutation({
      query: (id: string) => ({
        url: ServerPath.BOOTCAMP_ID(id),
        method: DELETE
      })
    })
  })
})

export const { useGetAllBootcampQuery, useGetBootcampQuery, useCreateBootcampMutation, useUpdateBootcampMutation, useDeleteBootcampMutation } =
  bootcampSlice
