import { Field, Form, Formik } from 'formik'
import { FC } from 'react'

type MyFormPropsType = {
  formSubmit: (values: { title: string, description: string }) => void
}
export const MyForm: FC<MyFormPropsType> = ({ formSubmit }) => {
  const initialValues = {
    title: '',
    description: ''
  }
  
  return <>
    <Formik 
      initialValues={initialValues}
      onSubmit={ async (values, { setSubmitting }) => {
        setSubmitting(true)
        console.log('click')
        console.log(values)
        await formSubmit(values)
        setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => {
        return <>
          <Form className='container m-5 p-5 bg-sky-100 border-sky-400 border-2 rounded flex flex-col w-1/3'>
            <Field className='my-6 w-full border-2 bg-transparent border-sky-400 rounded px-5 py-3 text-xl' name="title" 
              placeholder='Title'
            />
            <Field className='my-6 w-full border-2 bg-transparent border-sky-400 rounded px-5 py-3 text-xl' name="description" 
              placeholder='Description'
            />
            <button 
              className='px-6 py-3 bg-sky-400 rounded text-white text-xl hover:bg-sky-500 duration-300' 
              disabled={isSubmitting} type='submit'>Создать</button>
          </Form>
        </> 
      }}
    </Formik>
  </>
}