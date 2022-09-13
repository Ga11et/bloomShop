import { IProductR } from './../types/serverApiTypes';
import { IProfileData } from './../types/profileSliceTypes';
import { authAPIResponseTest, AuthUserData, postAPIResponse, UniversalResponseAPIType } from '../types/serverApiTypes';
import { filteredResponse } from '../types/clientApiTypes';

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
    const response = await fetch('/api/auth')
    const responseData: UniversalResponseAPIType<AuthUserData> = await response.json()
    return {
      status: response.status,
      data: responseData.data,
      errors: responseData.errors
    }
  },
  async profileData (): Promise<filteredResponse<IProfileData>> {
    const response = await fetch('/api/profile')
    const responseData: UniversalResponseAPIType<IProfileData> = await response.json()
    return {
      status: response.status,
      data: responseData.data,
      errors: responseData.errors
    }
  },
  async products (): Promise<filteredResponse<IProductR[]>> {
    const response = await fetch('/api/product')
    const responseData: UniversalResponseAPIType<IProductR[]> = await response.json()
    return {
      status: response.status,
      data: responseData.data,
      errors: responseData.errors
    }
  }
}