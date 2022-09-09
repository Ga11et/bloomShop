import { Button, Paper, Typography } from '@mui/material'
import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { authThunks } from '../../../app/store/reducers/auth/authThunks'

type WarningZonePropsType = {
  
}
export const WarningZone: FC<WarningZonePropsType> = ({  }) => {
  
  const dispatch = useAppDispatch()
  const { isAuth } = useAppSelector(store => store.AuthReducer)
  
  return <>
    <Paper elevation={5} sx={{
      padding: '20px',
      width: '100%'
    }}>
      <Typography variant='h5' component='h2' mb={2} color='error'>
        Опасная зона
      </Typography>
      {isAuth && <Button variant='outlined' color='warning' onClick={() => dispatch(authThunks.deleteRegistration())}>Удалить аккаунт</Button>}
    </Paper>
  </>
}