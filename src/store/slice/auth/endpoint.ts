import { ServerPath } from 'route/path'
import { apiSlice } from 'store/slice/api'
import { METHOD } from 'constant'
import { getAuthToken } from 'auth/utility'

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
    account: builder.query({
      query: () => ({
        url: ServerPath.AUTH_ACCOUNT,
        method: GET,
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${getAuthToken()}`
        }
      })
    })
  })
})

export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useAccountQuery } = authActionSlice
