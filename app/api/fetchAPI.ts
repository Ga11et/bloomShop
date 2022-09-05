import { authAPIUtils } from '../../utils/authAPI/authUtils'
import { PostType } from '../types/clientApiTypes'
import { PostModelType } from '../types/serverApiTypes'

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
    const response = await fetch('api/auth').then(authAPIUtils.handleResponse)
    return response
  }
}