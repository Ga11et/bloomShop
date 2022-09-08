import { postAPI } from './../../../api/postAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthData, RegData } from '../../../types/clientApiTypes';
import { fetchAPI } from '../../../api/fetchAPI';
import { deleteAPI } from '../../../api/deleteAPI';

export const authThunks = {
  postRegistration: createAsyncThunk(
    'postRegistration',
    async (registerData: RegData) => {
      const response = await postAPI.registerMe(registerData)
      return response
    }
  ),
  postLogin: createAsyncThunk(
    'postLogin',
    async (authData: AuthData) => {
      const response = await postAPI.authMe(authData)
      return response
    }
  ),
  getAuth: createAsyncThunk(
    'getAuth',
    async () => {
      const response = await fetchAPI.getAuth()
      return response
    }
  ),
  getLogout: createAsyncThunk(
    'getLogout',
    async () => {
      const response = await deleteAPI.getLogout()
      return response
    }
  )
}