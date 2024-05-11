import { apiSlice } from 'store/slice/api'
import { ServerPath } from 'route/path'
import { METHOD } from 'constant'

const { GET, POST, PUT, DELETE } = METHOD

export const feedbackSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllFeedback: builder.query<GetAllResponse, void>({
      query: () => ({
        url: ServerPath.FEEDBACK,
        method: GET
      }),
      keepUnusedDataFor: 5
    }),
    getFeedback: builder.query({
      query: (id) => ({
        url: ServerPath.FEEDBACK_ID(id),
        method: GET
      })
    }),
    createFeedback: builder.mutation({
      query: (data: any) => ({
        url: ServerPath.BOOTCAMP_FEEDBACK(data.id),
        method: POST,
        body: data
      }),
      invalidatesTags: ['Feedback']
    }),
    updateFeedback: builder.mutation({
      query: (data: any) => ({
        url: ServerPath.FEEDBACK_ID(data.id),
        method: PUT,
        body: data
      }),
      invalidatesTags: ['Feedback']
    }),
    deleteFeedback: builder.mutation({
      query: (id: string) => ({
        url: ServerPath.FEEDBACK_ID(id),
        method: DELETE
      })
    })
  })
})

export const { useGetAllFeedbackQuery, useGetFeedbackQuery, useCreateFeedbackMutation, useUpdateFeedbackMutation, useDeleteFeedbackMutation } =
  feedbackSlice
