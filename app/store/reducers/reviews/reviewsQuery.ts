import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPostReview } from '../../../types/clientApiTypes'
import { IReviewR, ISuccessR, UniversalResponseAPIType } from '../../../types/serverApiTypes'

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/reviews/' }),
  endpoints: (builder) => ({
    getProductReviews: builder.query<UniversalResponseAPIType<IReviewR[]>, string>({
      query: (productId) => `${productId}`
    }),
    post: builder.mutation<UniversalResponseAPIType<ISuccessR>, IPostReview>({
      query: (newPost) => ({
        url: '',
        method: 'POST',
        body: newPost
      })
    })
  })
})

export const { useGetProductReviewsQuery, usePostMutation } = reviewsApi