import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteAPI } from '../../../app/api/deleteAPI';
import { fetchAPI } from '../../../app/api/fetchAPI';

export const mainThunks = {
  getAuth: createAsyncThunk(
    'getAuth',
    async () => {
      const response = await fetchAPI.getAuth()
      return response
    }
  ),
  getLogaout: createAsyncThunk(
    'getLogout',
    async () => {
      const response = await deleteAPI.getLogout()
      return response
    }
  )
}