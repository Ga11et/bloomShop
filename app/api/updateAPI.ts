import { PostType } from '../types/clientApiTypes'

export const updateAPI = {
  async post (postData: PostType) {
    const response = await fetch(`/api/posts/${postData.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(postData) }).then(resp => resp.json())
    return response
  }
}