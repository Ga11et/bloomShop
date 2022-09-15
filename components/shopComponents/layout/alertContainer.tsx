import { Box, Button } from '@mui/material'
import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { AlertSlice } from '../../../app/store/reducers/alerts/alertsReducer'
import { DropAlert } from './alert'

type AlertContainerPropsType = {
  
}
export const AlertContainer: FC<AlertContainerPropsType> = ({  }) => {
  
  const { alerts } = useAppSelector(store => store.AlertReducer)

  return <>
    <Box sx={{
      position: 'fixed',
      bottom: 20,
      left: 20,
      display: 'grid',
      gridGap: '10px',
      zIndex: 100
    }}>
      {alerts.map(alert => <DropAlert key={alert.id} content={alert} />)}
    </Box>
  </>
}