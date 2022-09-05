import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userRole } from '../../../utils/models/admin';
import { mainThunks } from './thunks';

export interface MainSliceType {
  isAuth: boolean
  accessToken: string
  login: string
  role: userRole | null
}

const initialState: MainSliceType = {
  isAuth: false,
  accessToken: '',
  login: 'unknown',
  role: null
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
      if (action.payload.status === 200) {
        state.isAuth = true
        state.login = action.payload.data.login
        state.role = action.payload.data.role
      }
    }),
    builder.addCase(mainThunks.getLogout.fulfilled, ( state, action ) => {
      if (action.payload === 'ok') state.isAuth = false
    }),
    builder.addCase(mainThunks.getLogin.fulfilled, ( state, action ) => {
      if (action.payload.status === 200) {
        state.isAuth = true
        state.login = action.payload.data.login
        state.role = action.payload.data.role
      }
    })
  },
})

export default MainReducer.reducer