import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ServerPath } from 'route/path'

const baseQuery = fetchBaseQuery({
  baseUrl: ServerPath.SERVER
})

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Bootcamp', 'Course', 'Feedback', 'User'],
  endpoints: (builder) => ({})
})
