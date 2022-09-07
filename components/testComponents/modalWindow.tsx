import { Field, Form, Formik } from 'formik'
import { FC } from 'react'
import { useAppDispatch } from '../../app/store/hooks'
import { PostsThunks } from '../../app/store/reducers/posts/postsThunks'
import { PostType } from '../../app/types/clientApiTypes'

type PostModalWindowPropsType = {
  postData: PostType
  closeHandler: () => void
}
export const PostModalWindow: FC<PostModalWindowPropsType> = ({ closeHandler, postData }) => {

  const dispatch = useAppDispatch()

  const closeButtonHandler = () => {
    closeHandler()
  }

  return <>
    <div className='w-full h-full flex items-center justify-center bg-sky-100 fixed z-50 top-0'>
      <div className='w-2/3 h-min flex justify-center'>
        <Formik
          initialValues={{ title: postData.title, description: postData.description }}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true)
            const post: PostType = {
              title: values.title,
              description: values.description,
              id: postData.id
            }
            await dispatch(PostsThunks.updatePost(post))
            closeHandler()
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
                <button
                  className='px-6 py-3 bg-rose-400 rounded text-white text-xl hover:bg-rose-500 duration-300 mt-3'
                  disabled={isSubmitting} type='button' onClick={closeButtonHandler}>Закрыть</button>
              </Form>
            </>
          }}
        </Formik>
      </div>
    </div>
  </>
}