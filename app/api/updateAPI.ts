import { IProductR } from './../types/serverApiTypes';
import { filteredResponse, IPostProductType, IUpdateProduct, IUpdateProfileData, PostType } from '../types/clientApiTypes'
import { IProfileData } from '../types/profileSliceTypes'
import { postAPIResponse, UniversalResponseAPIType } from '../types/serverApiTypes'

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
  },
  async profile (profileData: IUpdateProfileData): Promise<filteredResponse<IProfileData>> {
    const response = await fetch('/api/profile', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(profileData) })
    const responseData: UniversalResponseAPIType<IProfileData> = await response.json()
    return {
      status: response.status,
      data: responseData.data,
      errors: responseData.errors
    }
  },
  async product (updateData: IUpdateProduct): Promise<filteredResponse<IProductR[]>> {
    const response = await fetch(`/api/product/${updateData.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(updateData) })
    const responseData: UniversalResponseAPIType<IProductR[]> = await response.json()
    return {
      status: response.status,
      data: responseData.data,
      errors: responseData.errors
    }
  }
}