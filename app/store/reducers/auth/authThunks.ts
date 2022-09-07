import { postAPI } from './../../../api/postAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RegData } from '../../../types/clientApiTypes';

export const authThunks = {
  postRegistration: createAsyncThunk(
    'postRegistration',
    async (registerData: RegData) => {
      const response = await postAPI.registerMe(registerData)
      return response
    }
  )
}