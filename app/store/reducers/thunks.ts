import { postAPI } from './../../api/postAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteAPI } from '../../api/deleteAPI';
import { fetchAPI } from '../../api/fetchAPI';
import { AuthData } from '../../types/clientApiTypes';

export const mainThunks = {
  getAuth: createAsyncThunk(
    'getAuth',
    async () => {
      const response = await fetchAPI.getAuth()
      return response
    }
  ),
  postLogin: createAsyncThunk(
    'postLogin',
    async (loginData: AuthData) => {
      const response = await postAPI.authMe(loginData)
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