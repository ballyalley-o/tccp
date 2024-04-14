import { createApi, fetchBaseQuery, BaseQueryApi, FetchArgs } from '@reduxjs/toolkit/query/react'
import { ServerPath } from 'route/path'
import { getAuthToken } from 'auth/utility'

const extFetchBase = (args: FetchArgs, api: BaseQueryApi, extraOptions: any, authToken: string) => {
  const headers = {
    Authorization: `Bearer ${authToken}`
  }

  return fetchBaseQuery({
    baseUrl: ServerPath.SERVER,
    prepareHeaders: (headers, { getState }) => {
      return headers
    }
  })(args, api, {
    ...extraOptions,
    headers
  })
}

export const apiSlice = createApi({
  baseQuery: (args, api, extraOptions) => extFetchBase(args, api, extraOptions, getAuthToken() as string),
  tagTypes: ['Bootcamp', 'Course', 'Feedback', 'User'],
  endpoints: (builder) => ({})
})
