import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAlert } from '../../../types/alertSliceTypes';

interface IAlertSlice {
  alerts: IAlert[]
}

const initialState: IAlertSlice = {
  alerts: []
}

export const AlertSlice = createSlice({
  name: 'AlertSlice',
  initialState,
  reducers: {
    addAlert (state, action: PayloadAction<IAlert>) {
      state.alerts.push(action.payload)
    },
    deleteAlert (state, action: PayloadAction<string>) {
      state.alerts = state.alerts.filter(alert => alert.id !== action.payload)
    }
  }
})

export default AlertSlice.reducer