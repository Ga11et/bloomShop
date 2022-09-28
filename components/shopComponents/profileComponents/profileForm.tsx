import { Button, Paper, TextField, Typography } from '@mui/material'
import { FC, FormEvent, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { AlertSlice } from '../../../app/store/reducers/alerts/alertsReducer'
import { useUpdateInfoMutation } from '../../../app/store/reducers/profile/profileQuery'
import { IProfileData } from '../../../app/types/profileSliceTypes'

type ProfileFormPropsType = {
  content?: IProfileData
}
export const ProfileForm: FC<ProfileFormPropsType> = ({ content }) => {

  const dispatch = useAppDispatch()
  const [updateData, result] = useUpdateInfoMutation()

  useEffect(() => {
    if (result.status === 'fulfilled') dispatch(AlertSlice.actions.addAlert({ id: String(Date.now()), title: 'Данные аккаунта успешно изменены', type: 'success' }))
  }, [result])

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const firstName = data.get('firstName') as string
    const secondName = data.get('secondName') as string
    const email = data.get('email') as string
    const login = data.get('login') as string
    updateData({ firstName, secondName, login, email })
  }

  return <>
    {content && content.firstName && <Paper component='form' onSubmit={onSubmitHandler} elevation={5} sx={{
      padding: '20px',
      width: '100%'
    }}>
      <Typography component='h2' variant='h5' pb={2}>
        Изменить данные аккаунта
      </Typography>
      <TextField name='firstName' defaultValue={content.firstName} required fullWidth label='Имя' margin='dense'/>
      <TextField name='secondName' defaultValue={content.secondName} required fullWidth label='Фамилия' margin='dense'/>
      <TextField name='login' defaultValue={content.login} required fullWidth label='Никнейм' margin='dense'/>
      <TextField name='email' defaultValue={content.email} required fullWidth label='Email' type='email' margin='dense'/>
      <Button disabled={result.isLoading} sx={{
        marginTop: '10px'
      }} variant='outlined' size='large' type='submit'>Подтвердить изменения</Button>
    </Paper>}
  </>
}