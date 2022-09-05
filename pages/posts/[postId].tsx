import { GetStaticProps } from 'next'
import { FC } from 'react'

type PostPropsType = {
  post: {
    title: string,
    body: string
  }
}
const Post: FC<PostPropsType> = ({ post }) => {
  return <>
    <h1>{post.title}</h1>
    <h1>{post.body}</h1>
  </>
}

export const getStaticPaths = async () => {

  const pagesCount = 100
  const paths = []
  let index = 1

  while (index <= pagesCount) {
    paths.push({ params: { postId: index.toString() }})
    index += 1
  }
  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<{},{postId: string}> = async ({ params }) => {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`)
  const postInfo = await post.json()
  return {
    props: { post: postInfo },
  }
}

export default Post