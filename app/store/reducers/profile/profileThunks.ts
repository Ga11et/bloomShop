import { updateAPI } from './../../../api/updateAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAPI } from '../../../api/fetchAPI';
import { postAPI } from '../../../api/postAPI';
import { IPostStatusData, IUpdateProfileData } from '../../../types/clientApiTypes';
export const ProfileThunks = {
  getData: createAsyncThunk(
    'getData',
    async () => {
      const response = await fetchAPI.profileData()
      return response
    }
  ),
  setStatus: createAsyncThunk(
    'setStatus',
    async (postData: IPostStatusData) => {
      const response = await postAPI.profileStatus(postData)
      return response
    }
  ),
  updateProfile: createAsyncThunk(
    'updateProfile',
    async (profileData: IUpdateProfileData) => {
      const response = await updateAPI.profile(profileData)
      return response
    }
  )
}