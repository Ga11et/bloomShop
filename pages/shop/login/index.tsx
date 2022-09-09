import { Avatar, Box, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import { LockOpenOutlined } from '@mui/icons-material'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { authThunks } from '../../../app/store/reducers/auth/authThunks'
import { ErrorType } from '../../../app/types/serverApiTypes'

type LoginPagePropsType = {
  
}
const LoginPage: NextPage<LoginPagePropsType> = ({  }) => {

  const router = useRouter()
  const dispatch = useAppDispatch()

  const [loaclErrors, setErrors] = useState<ErrorType[]>([])
  const { errors, isAuthLoading, isAuth } = useAppSelector(store => store.AuthReducer)

  useEffect(() => {
    if (isAuth === true) router.push('/shop')
  }, [isAuth])

  useEffect(() => {
    if (errors) setErrors(errors)
  }, [errors])

  useEffect(() => {
    dispatch(authThunks.getAuth())
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const login = data.get('login') as string
    const password = data.get('password') as string
    if (login && password) {
      dispatch(authThunks.postLogin({ login, password }))
    }
  }

  return <>
  <Paper component='main' square sx={{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: (t) => t.palette.background.paper
  }}>
    <Grid container component='div' sx={{ height: '100vh' }}>
      <Grid item md={7} sm={4} xs={false} sx={{
        backgroundColor: 'grey',
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
      <Grid item md={5} sm={8} xs={12} component={Paper} elevation={6} square sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <Box component='form' px={4} onSubmit={handleSubmit} sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Avatar sx={{
            marginBottom: '20px',
            backgroundColor: (t) => t.palette.secondary.main
          }}>
            <LockOpenOutlined />
          </Avatar>
          <Typography variant="h5" component="h1" mb={2}>
            Форма логина
          </Typography>
          <TextField
            error={Boolean(loaclErrors.find(error => error.param === 'login'))}
            helperText={loaclErrors.find(error => error.param === 'login')?.msg}
            id='login' required fullWidth label='Логин' name='login' autoFocus margin='normal' />
          <TextField 
            error={Boolean(loaclErrors.find(error => error.param === 'password'))}
            helperText={loaclErrors.find(error => error.param === 'password')?.msg}
            id='password'  required fullWidth label='Пароль' name='password' type='password' margin='normal' />
          <Button disabled={isAuthLoading} type='submit' fullWidth variant='outlined' size='large' sx={{
            marginTop: '10px',
            marginBottom: '10px'
          }}>Зайти</Button>
        </Box>
        <Box px={4} mt={1} sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <Link variant="body1" href='#' onClick={() => router.push('/shop/registration')}>
            Регистрация
          </Link>
          <Link variant="body1" href='#'>
            Вспомнить пароль
          </Link>
        </Box>
      </Grid>
    </Grid>
  </Paper>
  </>
}

export default LoginPage