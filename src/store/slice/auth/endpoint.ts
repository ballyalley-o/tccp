import { ServerPath } from 'route/path'
import { apiSlice } from 'store/slice/api'
import { METHOD } from 'constant'

const { POST } = METHOD

export const authActionSlice = apiSlice.injectEndpoints({
  endpoints: (builder: {
    mutation: (arg0: { query: ((data: any) => { url: string; method: METHOD; body: any }) | (() => { url: string; method: METHOD }) }) => any
  }) => ({
    login: builder.mutation({
      query: (data: any) => ({
        url: ServerPath.AUTH_LOG_IN,
        method: POST,
        body: data
      })
    }),
    logout: builder.mutation({
      query: () => ({
        url: ServerPath.AUTH_LOG_OUT,
        method: POST
      })
    }),
    register: builder.mutation({
      query: (data: any) => ({
        url: ServerPath.AUTH_REGISTER,
        method: POST,
        body: data
      })
    })
  })
})

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } = authActionSlice
