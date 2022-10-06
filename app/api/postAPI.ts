import { authAPIResponseTest, AuthUserData, UniversalResponseAPIType, IProductR } from './../types/serverApiTypes';
import { IPost } from './../../utils/models/post';
import { AuthData, filteredResponse, IPostImage, IPostProductType, IPostStatusData, RegData } from '../types/clientApiTypes'
import { postAPIResponse } from '../types/serverApiTypes'
import { IProfileData } from '../types/profileSliceTypes';
import { IProduct } from '../../utils/models/product';

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
  },
  async profileStatus (postData: IPostStatusData): Promise<filteredResponse<IProfileData>> {
    const response = await fetch('/api/profile/status', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(postData) })
    const responseData: UniversalResponseAPIType<IProfileData> = await response.json()
    return {
      status: response.status,
      data: responseData.data,
      errors: responseData.errors
    }
  },
  async product (postData: IPostProductType): Promise<filteredResponse<IProductR[]>> {
    const response = await fetch('/api/product', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(postData) })
    const responseData: UniversalResponseAPIType<IProductR[]> = await response.json()
    return {
      status: response.status,
      data: responseData.data,
      errors: responseData.errors
    }
  },
  async productImage (postData: IPostImage): Promise<filteredResponse<IProductR>> {
    const response = await fetch(`/api/product/images/${postData.productId}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(postData) })
    const responseData: UniversalResponseAPIType<IProductR> = await response.json()
    return {
      status: response.status,
      data: responseData.data,
      errors: responseData.errors
    }
  },
}