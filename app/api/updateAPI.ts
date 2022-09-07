import { PostType } from '../types/clientApiTypes'
import { postAPIResponse } from '../types/serverApiTypes'

export const updateAPI = {
  async post (postData: PostType): Promise<postAPIResponse> {
    const response = await fetch(`/api/posts/${postData.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(postData) })
    if (response.status === 200) {
      const posts = await response.json()
      return {
        status: 200,
        data: posts
      }
    }
    return 'not ok'
  }
}