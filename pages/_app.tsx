import { FC, useEffect, useState } from 'react'
import { fetchAPI } from '../app/api/fetchAPI'
import { PostType } from '../app/types/types'
import { Post } from '../components/testComponents/post'
import '../app/styles/app.css'
import { MyForm } from '../components/testComponents/myForm'
import { deleteAPI } from '../app/api/deleteAPI'
import { PostModalWindow } from '../components/testComponents/modalWindow'
import { updateAPI } from '../app/api/updateAPI'

type namePropsType = {
  
}
const HomePage: FC<namePropsType> = ({  }) => {

  const [posts, setPosts] = useState<PostType[]>([])
  const [modalPostContent, setModalPostContent] = useState<PostType | undefined>(undefined)

  const formSubmit = async (values: { title: string, description: string }) => {
    const response = await fetch('/api/posts', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) }).then(resp => resp.json())
    await fetchAPI.posts().then(posts => setPosts(posts))
  }
  const deletePostHandler = async (postId: string) => {
    const response = await deleteAPI.post(postId)
    await fetchAPI.posts().then(posts => setPosts(posts))
  }
  const closeModalHandler = () => {
    setModalPostContent(undefined)
  }
  const openModalHandler = (postData: PostType) => {
    setModalPostContent(postData)
  }
  const submitModalHandler = async (postData: PostType) => {
    setModalPostContent(undefined)
    await updateAPI.post({ id: postData.id, description: postData.description, title: postData.title })
    await fetchAPI.posts().then(posts => setPosts(posts))
  }

  useEffect(() => {
    fetchAPI.posts().then(posts => setPosts(posts))
  }, [])
  
  return <>
    {modalPostContent !== undefined && <PostModalWindow postData={modalPostContent} closeHandler={closeModalHandler} submitHandler={submitModalHandler} />}
    <MyForm formSubmit={formSubmit} />
    <main>
      {posts.map(post => <Post deleteHandler={deletePostHandler} content={post} key={post.id} openUpdateModal={openModalHandler} />)}
    </main>
  </>
}

export default HomePage