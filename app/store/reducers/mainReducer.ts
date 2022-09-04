import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mainThunks } from './thunks';

export interface MainSliceType {
  isAuth: boolean
  accessToken: string
}

const initialState: MainSliceType = {
  isAuth: false,
  accessToken: ''
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
  },
})

export default MainReducer.reducer