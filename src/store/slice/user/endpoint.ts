import { ServerPath } from 'route/path'
import { apiSlice } from 'store/slice/api'
import { METHOD } from 'constant'

const { GET, PUT, DELETE } = METHOD

export const userSlice = apiSlice.injectEndpoints({
  endpoints: (builder: EndpointBuilder) => ({
    getAllUser: builder.query({
      query: () => ({
        url: ServerPath.AUTH_USER,
        method: GET
      }),
      providesTags: ['Users'],
      keepUnusedDataFor: 5
    }),
    getUser: builder.query({
      query: (id) => ({
        url: ServerPath.AUTH_SINGLE_USER(id),
        method: GET
      })
    }),
    updateUser: builder.mutation({
      query: (data: any) => ({
        url: ServerPath.AUTH_SINGLE_USER(data.id),
        method: PUT,
        body: data
      })
    }),
    deleteUser: builder.mutation({
      query: (data: any) => ({
        url: ServerPath.AUTH_SINGLE_USER(data.id),
        method: DELETE,
        body: data
      })
    })
  })
})

export const { useGetAllUserQuery, useGetUserQuery, useUpdateUserMutation, useDeleteUserMutation } = userSlice
