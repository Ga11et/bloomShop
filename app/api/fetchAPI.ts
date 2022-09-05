import { PostModelType } from '../types/serverApiTypes'
import { PostType } from '../types/types'

export const fetchAPI = {
  async posts () {
    const posts: PostModelType[] = await fetch('/api/posts').then(resp => resp.json())
    const returnValue: PostType[] = posts.map(post => ({
      title: post.title,
      description: post.description,
      id: post._id
    }))
    return returnValue
  },
  async getAuth () {
    const response = await fetch('api/auth').then(resp => resp.json())
    return response
  }
}