import { Field, Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { postAPI } from '../../app/api/postAPI'

type LoginPagePropsType = {
  
}
const LoginPage: FC<LoginPagePropsType> = ({  }) => {

  const router = useRouter()

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
              <button type='submit'
                className='px-6 py-3 bg-sky-400 rounded text-white text-xl hover:bg-sky-500 duration-300 w-full'
              >Регистрация</button>
            </Form>
          </>
        }}
      </Formik>
    </main>
  </>
}
export default LoginPage