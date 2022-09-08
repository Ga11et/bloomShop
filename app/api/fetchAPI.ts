import { authAPIResponse, authAPIResponseTest, AuthUserData, postAPIResponse, UniversalResponseAPIType } from '../types/serverApiTypes';

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
  async getAuth (): Promise<authAPIResponseTest> {
    const response = await fetch('api/auth')
    const responseData: UniversalResponseAPIType<AuthUserData> = await response.json()
    return {
      status: response.status,
      data: responseData.data,
      errors: responseData.errors
    }
  }
}