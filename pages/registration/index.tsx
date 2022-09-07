import { KeyOutlined } from '@mui/icons-material'
import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Field, Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import { FC, FormEvent, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'
import { authThunks } from '../../app/store/reducers/auth/authThunks'

type LoginPagePropsType = {
  
}
const LoginPage: FC<LoginPagePropsType> = ({  }) => {

  const router = useRouter()
  const dispatch = useAppDispatch()
  const { isAuthLoading } = useAppSelector(store => store.AuthReducer)

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
      <Grid item xs={12} sm={4} md={5} component={Paper} elevation={6} square sx={{
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
            <TextField id='firstName' required fullWidth label='Имя' name='firstName' margin='normal' />
            <TextField id='secondName' required fullWidth label='Фамилия' name='secondName' margin='normal' />
          </Box>
          <TextField id='email' required fullWidth label='E-mail' name='email' type='email' margin='normal' />
          <TextField id='login' required fullWidth label='Логин' name='login' margin='normal' />
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
          <Link variant="body1" href='./login'>
            Есть аккаунт? Страница логина
          </Link>
        </Box>
      </Grid>
      <Grid item xs={false} sm={8} md={7} sx={{
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
    </Grid>
    {/* <main className='w-full h-screen bg-sky-100 flex items-center justify-center'>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true)
          const response = await postAPI.registerMe(values)
          if (response === 'ok') router.push('/login')
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => {
          return <>
            <Form className='w-80 h-min border-2 rounded border-sky-400 p-5 bg-white'>
              <h2
                className='text-2xl mb-6'
              >Форма Регистрации</h2>
              <Field name='login' placeholder='Login' 
                className='mb-6 w-full border-2 bg-transparent border-sky-400 rounded px-5 py-3 text-xl'
              />
              <Field name='password' placeholder='Password' type='password' 
                className='mb-6 w-full border-2 bg-transparent border-sky-400 rounded px-5 py-3 text-xl'
              />
              <button type='submit' disabled={isSubmitting}
                className='px-6 py-3 bg-sky-400 rounded text-white text-xl hover:bg-sky-500 duration-300 w-full'
              >Регистрация</button>
            </Form>
          </>
        }}
      </Formik>
    </main> */}
  </>
}
export default LoginPage