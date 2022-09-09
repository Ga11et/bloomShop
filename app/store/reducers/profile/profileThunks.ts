import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAPI } from '../../../api/fetchAPI';
export const ProfileThunks = {
  getData: createAsyncThunk(
    'getData',
    async () => {
      const response = await fetchAPI.profileData()
      return response
    }
  )
}