import { authAPIResponseTest, AuthUserData, UniversalResponseAPIType } from './../types/serverApiTypes';
import { IPost } from './../../utils/models/post';
import { AuthData, RegData } from '../types/clientApiTypes'
import { postAPIResponse } from '../types/serverApiTypes'

export const postAPI = {
  async authMe (loginData: AuthData): Promise<authAPIResponseTest> {
    const response = await fetch(`/api/auth`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(loginData) })
    const responseData: UniversalResponseAPIType<AuthUserData> = await response.json()
    return {
      status: response.status,
      data: responseData.data,
      errors: responseData.errors
    }
  },
  async registerMe (loginData: RegData): Promise<authAPIResponseTest> {
    const response = await fetch(`/api/register`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(loginData) })
    const responseData: UniversalResponseAPIType<AuthUserData> = await response.json()
    return {
      status: response.status,
      data: responseData.data,
      errors: responseData.errors
    }
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