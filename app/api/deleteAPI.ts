import { postAPIResponse } from '../types/serverApiTypes'

export const deleteAPI = {
  async post (postIdl: string): Promise<postAPIResponse> {
    const response = await fetch(`/api/posts/${postIdl}`, { method: 'DELETE' })
    if (response.status === 200) {
      const posts = await response.json()
      return {
        status: 200,
        data: posts
      }
    }
    return 'not ok'
  },
  async getLogout () {
    const response = await fetch('api/auth', { method: 'DELETE' }).then(resp => resp.json())
    return response
  }
}