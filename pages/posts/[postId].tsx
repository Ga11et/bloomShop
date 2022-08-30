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

// export async function getServerSideProps() {
//   return {
//     props: {
//       name: 'name',
//       description: 'description'
//     }
//   }
// }
export const getStaticPaths = async () => {

  const pagesCount = 100
  const paths = []
  let index = 1

  while (index <= pagesCount) {
    paths.push({ params: { postId: index.toString() }})
    index += 1
  }
  console.log(paths)
  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export const getStaticProps: GetStaticProps<{},{postId: string}> = async ({ params }) => {
  console.log(params)
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`)
  const postInfo = await post.json()
  return {
    props: { post: postInfo },
  }
}

export default Post