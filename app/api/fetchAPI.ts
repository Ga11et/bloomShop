import { authAPIResponse, postAPIResponse } from '../types/serverApiTypes';

export const fetchAPI = {
  async posts (): Promise<postAPIResponse> {
    const response = await fetch('/api/posts')
    if (response.status === 200) {
      const posts = await response.json()
      return {
        status: 200,
        data: posts
      }
    }
    return 'not ok'
  },
  async getAuth (): Promise<authAPIResponse> {
    const response = await fetch('api/auth')
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