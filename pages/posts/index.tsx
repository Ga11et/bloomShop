import { FC, useEffect, useState } from 'react'
import { Post } from '../../components/testComponents/post'
import { MyForm } from '../../components/testComponents/myForm'
import { PostModalWindow } from '../../components/testComponents/modalWindow'
import Router from 'next/router'
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'
import { mainThunks } from '../../app/store/reducers/thunks'
import { PostsThunks } from '../../app/store/reducers/posts/postsThunks'
import { PostType } from '../../app/types/clientApiTypes'

type PostsPagePropsType = {
  
}
const PostsPage: FC<PostsPagePropsType> = ({  }) => {


  const [modalPostContent, setModalPostContent] = useState<PostType | undefined>(undefined)
  const dispatch = useAppDispatch()
  const { isAuth } = useAppSelector(store => store.MainReducer)
  const { posts, isLoaded } = useAppSelector(store => store.PostsReducer)

  const formSubmit = async (values: { title: string, description: string }) => {
    // const response = await fetch('/api/posts', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) }).then(resp => resp.json())
    // await fetchAPI.posts().then(posts => setPosts(posts))
  }
  const deletePostHandler = async (postId: string) => {
    // const response = await deleteAPI.post(postId)
    // await fetchAPI.posts().then(posts => setPosts(posts))
  }
  const closeModalHandler = () => {
    setModalPostContent(undefined)
  }
  const openModalHandler = (postData: PostType) => {
    setModalPostContent(postData)
  }
  const submitModalHandler = async (postData: PostType) => {
    setModalPostContent(undefined)
    // await updateAPI.post({ id: postData.id, description: postData.description, title: postData.title })
    // await fetchAPI.posts().then(posts => setPosts(posts))
  }
  const logoutHandler = () => {
    dispatch(mainThunks.getLogaout())
  }

  useEffect(() => {
    dispatch(PostsThunks.getPosts())
    dispatch(mainThunks.getAuth())
  }, [])
  
  return <main className='relative'>
    {modalPostContent !== undefined && <PostModalWindow postData={modalPostContent} closeHandler={closeModalHandler} submitHandler={submitModalHandler} />}
    <MyForm formSubmit={formSubmit} />
    {!isAuth ? <button onClick={() => Router.push('/login')}
      className='px-6 py-3 bg-sky-400 rounded text-white text-xl hover:bg-sky-500 duration-300 absolute top-0 right-5'
    >Логин</button>
    : <button onClick={logoutHandler}
      className='px-6 py-3 bg-rose-400 rounded text-white text-xl hover:bg-rose-500 duration-300 absolute top-0 right-5'
    >Выйти</button>}
    <main>
      {posts.map(post => <Post deleteHandler={deletePostHandler} content={post} key={post.id} openUpdateModal={openModalHandler} />)}
    </main>
  </main>
}

export default PostsPage