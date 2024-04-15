import { apiSlice } from 'store/slice/api'
import { ServerPath } from 'route/path'
import { METHOD } from 'constant'

const { GET, POST, PUT, DELETE } = METHOD

export const courseSlice = apiSlice.injectEndpoints({
  endpoints: (builder: EndpointBuilder) => ({
    getAllCourse: builder.query({
      query: () => ({
        url: ServerPath.COURSE,
        method: GET
      }),
      keepUnusedDataFor: 5
    }),
    getCourse: builder.query({
      query: (id) => ({
        url: ServerPath.COURSE_ID(id),
        method: GET
      })
    }),
    createCourse: builder.mutation({
      query: (data: any) => ({
        url: ServerPath.COURSE,
        method: POST,
        body: data
      })
    }),
    updateCourse: builder.mutation({
      query: (data: any) => ({
        url: ServerPath.COURSE_ID(data.id),
        method: PUT,
        body: data
      })
    }),
    deleteCourse: builder.mutation({
      query: (id: string) => ({
        url: ServerPath.BOOTCAMP_ID(id),
        method: DELETE
      })
    })
  })
})

export const { useGetAllCourseMutation, useGetCourseQuery, useCreateCourseMutation, useUpdateCourseMutation, useDeleteCourseMutation } = courseSlice
