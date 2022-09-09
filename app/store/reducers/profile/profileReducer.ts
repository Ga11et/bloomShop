import { ProfileThunks } from './profileThunks';
import { createSlice } from '@reduxjs/toolkit';
import { IProfileData } from '../../../types/profileSliceTypes';
import { ErrorType } from '../../../types/serverApiTypes';

interface IProfileSlice {
  profileData: IProfileData
  isLoaded: boolean
  errors: ErrorType[]
}

const initialState: IProfileSlice = {
  profileData: {} as IProfileData,
  isLoaded: false,
  errors: []
}

export const ProfileSlice = createSlice({
  name: 'ProfileSlice',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder.addCase(ProfileThunks.getData.pending, (state) => {
      state.isLoaded = true
      state.errors = []
    })
    builder.addCase(ProfileThunks.getData.fulfilled, (state, action) => {
      state.isLoaded = false
      if (action.payload.status === 200) {
        state.profileData = action.payload.data ? action.payload.data : {} as IProfileData
      }
      if (action.payload.status === 422) {
        state.errors = action.payload.errors ? action.payload.errors : []
      }
    })
  },
})

export default ProfileSlice.reducer