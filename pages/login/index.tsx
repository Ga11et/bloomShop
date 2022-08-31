import { Field, Form, Formik } from 'formik'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { postAPI } from '../../app/api/postAPI'
import { useAppDispatch, useAppSelector } from '../../components/store/hooks'
import { mainThunks } from '../../components/store/reducers/thunks'
import { wrapper } from '../../components/store/store'

type LoginPagePropsType = {
  
}
const LoginPage: NextPage<LoginPagePropsType> = ({  }) => {

  const router = useRouter()
  const dispatch = useAppDispatch()

  const { isAuth } = useAppSelector(store => store.MainReducer)

  useEffect(() => {
    console.log(isAuth)
    if (isAuth === true) router.push('/posts')
  }, [isAuth])

  useEffect(() => {
    console.log(isAuth)
    dispatch(mainThunks.getAuth())
  }, [])

  const initialValues = {
    login: '',
    password: ''
  }

  return <>
    <main className='w-full h-screen bg-sky-100 flex items-center justify-center'>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true)
          const response = await postAPI.authMe(values)
          if (response === 'ok') router.push('/posts')
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => {
          return <>
            <Form className='w-80 h-min border-2 rounded border-sky-400 p-5 bg-white'>
              <h2
                className='text-2xl mb-6'
              >Форма Логина</h2>
              <Field name='login' placeholder='Login' 
                className='mb-6 w-full border-2 bg-transparent border-sky-400 rounded px-5 py-3 text-xl'
              />
              <Field name='password' placeholder='Password' type='password' 
                className='mb-6 w-full border-2 bg-transparent border-sky-400 rounded px-5 py-3 text-xl'
              />
              <button type='submit' disabled={isSubmitting}
                className='px-6 py-3 bg-sky-400 rounded text-white text-xl hover:bg-sky-500 duration-300 w-full'
              >Логин</button>
            </Form>
          </>
        }}
      </Formik>
    </main>
  </>
}

LoginPage.getInitialProps = wrapper.getInitialPageProps(({ dispatch, getState }) => {
  return () => {
  }
})

export default LoginPage