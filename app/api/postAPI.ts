import { authAPIResponse } from './../types/serverApiTypes';
import { IPost } from './../../utils/models/post';
import { AuthData } from '../types/clientApiTypes'
import { postAPIResponse } from '../types/serverApiTypes'

export const postAPI = {
  async authMe (loginData: AuthData): Promise<authAPIResponse> {
    const response = await fetch(`/api/auth`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(loginData) })
    if (response.status === 200) {
      const userData = await response.json()
      return {
        status: 200,
        data: userData
      }
    }
    return 'not ok'
  },
  async registerMe (loginData: AuthData) {
    const response = await fetch(`/api/register`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(loginData) }).then(resp => resp.json())
    return response
  },
  async post (postData: IPost): Promise<postAPIResponse> {
    const response = await fetch('/api/posts', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(postData) })
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