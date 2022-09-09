import { Button, Paper, TextField, Typography } from '@mui/material'
import { FC, FormEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { ProfileThunks } from '../../../app/store/reducers/profile/profileThunks'

type ProfileFormPropsType = {
  
}
export const ProfileForm: FC<ProfileFormPropsType> = ({  }) => {

  const dispatch = useAppDispatch()
  const { profileData, isLoaded } = useAppSelector(store => store.ProfileReducer)

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const firstName = data.get('firstName') as string
    const secondName = data.get('secondName') as string
    const email = data.get('email') as string
    const login = data.get('login') as string
    dispatch(ProfileThunks.updateProfile({ firstName, secondName, login, email }))
  }

  return <>
    {profileData.firstName && <Paper component='form' onSubmit={onSubmitHandler} elevation={5} sx={{
      padding: '20px',
      width: '100%'
    }}>
      <Typography component='h2' variant='h5' pb={2}>
        Изменить данные аккаунта
      </Typography>
      <TextField name='firstName' defaultValue={profileData.firstName} required fullWidth label='Имя' margin='dense'/>
      <TextField name='secondName' defaultValue={profileData.secondName} required fullWidth label='Фамилия' margin='dense'/>
      <TextField name='login' defaultValue={profileData.login} required fullWidth label='Никнейм' margin='dense'/>
      <TextField name='email' defaultValue={profileData.email} required fullWidth label='Email' type='email' margin='dense'/>
      <Button disabled={isLoaded} sx={{
        marginTop: '10px'
      }} variant='outlined' size='large' type='submit'>Подтвердить изменения</Button>
    </Paper>}
  </>
}