import { authThunks } from './authThunks';
import { createSlice } from '@reduxjs/toolkit';
import { AuthUserData } from '../../../types/serverApiTypes';

interface IAuthSlice {
  userData: AuthUserData
  isAuth: boolean
  isAuthLoading: boolean
  isRegLoading: boolean
}

const initialState: IAuthSlice = {
  isAuth: false,
  isRegLoading: false,
  isAuthLoading: false,
  userData: {
    login: '',
    id: '',
    role: 'none'
  }
}

const AuthReducer = createSlice({
  name: 'AuthReducer',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder.addCase(authThunks.postRegistration.pending, (state) => {
      state.isRegLoading = true
    })
    builder.addCase(authThunks.postRegistration.fulfilled, (state, action) => {
      state.isRegLoading = false
      if (action.payload !== 'not ok') {
        state.userData = action.payload.data
      }
    })
  },
})

export default AuthReducer.reducer