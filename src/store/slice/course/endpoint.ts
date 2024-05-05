import { apiSlice } from 'store/slice/api'
import { ServerPath } from 'route/path'
import { METHOD } from 'constant'

const { GET, POST, PUT, DELETE } = METHOD

export const courseSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCourse: builder.query<GetAllResponse, void>({
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
    getAllCourseByBootcamp: builder.query({
      query: (id) => ({
        url: ServerPath.COURSE_BY_BOOTCAMP(id),
        method: GET
      }),
      keepUnusedDataFor: 5
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
        url: ServerPath.COURSE_ID(id),
        method: DELETE
      })
    })
  })
})

export const {
  useGetAllCourseQuery,
  useGetCourseQuery,
  useGetAllCourseByBootcampQuery,
  useCreateCourseMutation,
  useUpdateCourseMutation,
  useDeleteCourseMutation
} = courseSlice
