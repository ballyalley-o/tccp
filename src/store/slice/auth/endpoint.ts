import { ServerPath } from 'route/path'
import { apiSlice } from 'store/slice/api'
import { METHOD } from 'constant'

const { GET, POST } = METHOD

export const authActionSlice = apiSlice.injectEndpoints({
  endpoints: (builder: EndpointBuilder) => ({
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
    }),
    account: builder.mutation({
      query: (data: any) => ({
        url: ServerPath.AUTH_ACCOUNT,
        method: GET,
        body: data
      })
    })
  })
})

export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useAccountMutation } = authActionSlice
