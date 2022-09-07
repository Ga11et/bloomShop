import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthUserData } from '../../types/serverApiTypes';
import { mainThunks } from './thunks';

export interface MainSliceType {
  isAuth: boolean
  isAuthLoaded: boolean
  authData: AuthUserData
  accessToken: string
}

const initialState: MainSliceType = {
  isAuth: false,
  isAuthLoaded: false,
  accessToken: '',
  authData: {
    id: '',
    login: '',
    role: 'none'
  }
}

export const MainReducer = createSlice({
  name: 'MainReducer',
  initialState,
  reducers: {
    setIsAuth (state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload
    },
    setAccessToken (state, action: PayloadAction<string>) {
      state.accessToken = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(mainThunks.getAuth.fulfilled, ( state, action ) => {
      if (action.payload === 'ok') state.isAuth = true
    }),
    builder.addCase(mainThunks.getLogaout.fulfilled, ( state, action ) => {
      if (action.payload === 'ok') state.isAuth = false
    })
    builder.addCase(mainThunks.postLogin.pending, (state) => {
      state.isAuthLoaded = false
      state.isAuth = false
    })
    builder.addCase(mainThunks.postLogin.fulfilled, (state, action) => {
      state.isAuthLoaded = true
      if (action.payload !== 'not ok') {
        state.authData = action.payload.data
        state.isAuth = true
      }
    })
  },
})

export default MainReducer.reducer