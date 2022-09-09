import { KeyOutlined } from '@mui/icons-material'
import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import { FC, FormEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { authThunks } from '../../../app/store/reducers/auth/authThunks'
import { ErrorType } from '../../../app/types/serverApiTypes'

type RegistrationPagePropsType = {
  
}
const RegistrationPage: FC<RegistrationPagePropsType> = ({  }) => {

  const dispatch = useAppDispatch()
  const router = useRouter()
  const [localErrors, setLocalErrors] = useState<ErrorType[]>([])
  const { isAuthLoading, errors } = useAppSelector(store => store.AuthReducer)

  useEffect(() => {
    if (errors) setLocalErrors(errors)
  }, [errors])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const login = data.get('login') as string
    const password = data.get('password') as string
    const email = data.get('email') as string
    const firstName = data.get('firstName') as string
    const secondName = data.get('secondName') as string
    dispatch(authThunks.postRegistration({ email, firstName, secondName, login, password }))
  }

  return <>
    <Grid container sx={{ height: '100vh' }}>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }} >
        <Box component='form' px={4} onSubmit={handleSubmit} sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Avatar sx={{
            marginBottom: '20px',
            backgroundColor: (t) => t.palette.secondary.main
          }}>
            <KeyOutlined />
          </Avatar>
          <Typography variant="h5" component="h1" mb={2}>
            Форма Регистрации
          </Typography>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridGap: '20px',
            width: '100%'
          }}>
            <TextField
              error={Boolean(localErrors.find(error => error.param === 'firstName'))}
              helperText={localErrors.find(error => error.param === 'firstName')?.msg}
              id='firstName' required fullWidth label='Имя' name='firstName' margin='normal' />
            <TextField
              error={Boolean(localErrors.find(error => error.param === 'secondName'))}
              helperText={localErrors.find(error => error.param === 'secondName')?.msg}
              id='secondName' required fullWidth label='Фамилия' name='secondName' margin='normal' />
          </Box>
          <TextField id='email' required fullWidth label='E-mail' name='email' type='email' margin='normal' />
          <TextField
            error={Boolean(localErrors.find(error => error.param === 'login'))}
            helperText={localErrors.find(error => error.param === 'login')?.msg}
            id='login' required fullWidth label='Логин' name='login' margin='normal' />
          <TextField id='password' required fullWidth label='Пароль' name='password' type='password' margin='normal' />
          <Button disabled={isAuthLoading} type='submit' fullWidth variant='outlined' size='large' sx={{
            marginTop: '10px',
            marginBottom: '10px'
          }}>Регистрация</Button>
        </Box>
        <Box px={4} mt={1} sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <Link variant="body1" href='#' onClick={() => router.push('/shop/login')}>
            Есть аккаунт? Страница логина
          </Link>
        </Box>
      </Grid>
      <Grid item xs={false} sm={4} md={7} sx={{
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
    </Grid>
  </>
}
export default RegistrationPage