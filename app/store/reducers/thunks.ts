import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteAPI } from '../../api/deleteAPI';
import { fetchAPI } from '../../api/fetchAPI';

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