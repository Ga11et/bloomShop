import { IUpdateProfileData } from './../../../types/clientApiTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPostStatusData, IUpdateProfilePhoto } from '../../../types/clientApiTypes'
import { IProfileData } from '../../../types/profileSliceTypes'
import { UniversalResponseAPIType } from '../../../types/serverApiTypes'

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/profile/' }),
  tagTypes: ['info'],
  endpoints: (builder) => ({
    getProfileInfo: builder.query<UniversalResponseAPIType<IProfileData>, null>({
      query: () => ({
        url: ''
      }),
      providesTags: result => ['info']
    }),
    update: builder.mutation<UniversalResponseAPIType<IProfileData>, IUpdateProfilePhoto>({
      query: (newPhoto) => ({
        url: 'photo',
        method: 'PUT',
        body: newPhoto
      }),
      invalidatesTags: ['info']
    }),
    updateStatus: builder.mutation<UniversalResponseAPIType<IProfileData>, IPostStatusData>({
      query: (newStatus) => ({
        url: 'status',
        method: 'POST',
        body: newStatus
      }),
      invalidatesTags: ['info']
    }),
    updateInfo: builder.mutation<UniversalResponseAPIType<IProfileData>, IUpdateProfileData>({
      query: (newData) => ({
        url: '',
        method: 'PUT',
        body: newData
      }),
      invalidatesTags: ['info']
    })
  })
})

export const { useUpdateMutation, useUpdateStatusMutation, useUpdateInfoMutation, useGetProfileInfoQuery } = profileApi