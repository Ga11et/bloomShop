import { authThunks } from './authThunks';
import { createSlice } from '@reduxjs/toolkit';
import { AuthUserData, ErrorType } from '../../../types/serverApiTypes';

interface IAuthSlice {
  userData?: AuthUserData
  isAuth: boolean
  isAuthLoading: boolean
  isRegLoading: boolean
  isRegSuccess: boolean
  errors?: ErrorType[]
}

const initialState: IAuthSlice = {
  isAuth: false,
  isRegLoading: false,
  isAuthLoading: false,
  isRegSuccess: false
}

const AuthReducer = createSlice({
  name: 'AuthReducer',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder.addCase(authThunks.postRegistration.pending, (state) => {
      state.isRegLoading = true
      state.isRegSuccess = false
    })
    builder.addCase(authThunks.postRegistration.fulfilled, (state, action) => {
      state.isRegLoading = false
      if (action.payload.status === 200) {
        state.isRegSuccess = true
      }
      if (action.payload.status === 400) {
        state.errors = action.payload.errors
      }
    })
    builder.addCase(authThunks.postLogin.pending, (state) => {
      state.isAuthLoading = true
      state.errors = []
    })
    builder.addCase(authThunks.postLogin.fulfilled, (state, action) => {
      state.isAuthLoading = false
      if (action.payload.status === 200) {
        state.isAuth = true
        state.userData = action.payload.data
        state.errors = []
      }
      if (action.payload.status === 400) {
        state.errors = action.payload.errors
      }
    })
    builder.addCase(authThunks.getAuth.pending, (state) => {
      state.isAuthLoading = true
    })
    builder.addCase(authThunks.getAuth.fulfilled, (state, action) => {
      state.isAuthLoading = false
      if (action.payload.status === 200) {
        state.isAuth = true
        state.userData = action.payload.data
      }
      if (action.payload.status === 400) {
        state.errors = action.payload.errors
        console.log(action.payload.errors)
      }
    })
    builder.addCase(authThunks.getLogout.pending, (state) => {
      state.isAuthLoading = true
    })
    builder.addCase(authThunks.getLogout.fulfilled, (state, action) => {
      state.isAuthLoading = false
      if (action.payload.status === 200) {
        state.isAuth = false
        state.userData = undefined
      }
      if (action.payload.status === 400) {
        state.errors = action.payload.errors
        console.log(action.payload.errors)
      }
    })
    builder.addCase(authThunks.deleteRegistration.pending, (state) => {
      state.isAuthLoading = true
    })
    builder.addCase(authThunks.deleteRegistration.fulfilled, (state, action) => {
      state.isAuthLoading = false
      if (action.payload.status === 200) {
        state.isAuth = false
        state.userData = undefined
      }
      if (action.payload.status === 400) {
        state.errors = action.payload.errors
        console.log(action.payload.errors)
      }
    })
  },
})

export default AuthReducer.reducer