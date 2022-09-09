import { FC, useEffect, useState } from 'react'
import { Post } from '../../components/testComponents/post'
import { MyForm } from '../../components/testComponents/myForm'
import { PostModalWindow } from '../../components/testComponents/modalWindow'
import Router from 'next/router'
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'
import { PostsThunks } from '../../app/store/reducers/posts/postsThunks'
import { PostType } from '../../app/types/clientApiTypes'
import { CircularProgress } from '@mui/material'
import { authThunks } from '../../app/store/reducers/auth/authThunks'

type PostsPagePropsType = {
  
}
const PostsPage: FC<PostsPagePropsType> = ({  }) => {


  const [modalPostContent, setModalPostContent] = useState<PostType | undefined>(undefined)
  const dispatch = useAppDispatch()
  const { isAuth } = useAppSelector(store => store.AuthReducer)
  const { posts, isLoaded } = useAppSelector(store => store.PostsReducer)

  const closeModalHandler = () => {
    setModalPostContent(undefined)
  }
  const openModalHandler = (postData: PostType) => {
    setModalPostContent(postData)
  }
  const logoutHandler = () => {
    dispatch(authThunks.getLogout())
  }

  useEffect(() => {
    dispatch(PostsThunks.getPosts())
    dispatch(authThunks.getAuth())
  }, [])
  
  return <main className='relative'>
    {modalPostContent !== undefined && <PostModalWindow postData={modalPostContent} closeHandler={closeModalHandler} />}
    <MyForm />
    {!isAuth ? <button onClick={() => Router.push('/login')}
      className='px-6 py-3 bg-sky-400 rounded text-white text-xl hover:bg-sky-500 duration-300 absolute top-0 right-5'
    >Логин</button>
    : <button onClick={logoutHandler}
      className='px-6 py-3 bg-rose-400 rounded text-white text-xl hover:bg-rose-500 duration-300 absolute top-0 right-5'
    >Выйти</button>}
    <main>
      {isLoaded ? posts.map(post => <Post content={post} key={post.id} openUpdateModal={openModalHandler} />)
      : <CircularProgress />}
    </main>
  </main>
}

export default PostsPage