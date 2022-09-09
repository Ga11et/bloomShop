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
      state.profileData = {} as IProfileData
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
    builder.addCase(ProfileThunks.setStatus.pending, (state) => {
      state.isLoaded = true
      state.errors = []
    })
    builder.addCase(ProfileThunks.setStatus.fulfilled, (state, action) => {
      state.isLoaded = false
      if (action.payload.status === 200 && action.payload.data) {
        state.profileData.status = action.payload.data.status
      }
      if (action.payload.status === 422) {
        state.errors = action.payload.errors ? action.payload.errors : []
      }
    })
    builder.addCase(ProfileThunks.updateProfile.pending, (state) => {
      state.isLoaded = true
      state.errors = []
    })
    builder.addCase(ProfileThunks.updateProfile.fulfilled, (state, action) => {
      state.isLoaded = false
      if (action.payload.status === 200 && action.payload.data) {
        state.profileData = action.payload.data
      }
      if (action.payload.status === 422) {
        state.errors = action.payload.errors ? action.payload.errors : []
      }
    })
  },
})

export default ProfileSlice.reducer