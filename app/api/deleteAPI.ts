import { IProductR } from './../types/serverApiTypes';
import { AuthUserData, postAPIResponse, UniversalResponseAPIType } from '../types/serverApiTypes'
import { filteredResponse, IDeleteImage } from '../types/clientApiTypes';

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
    const response = await fetch('/api/auth', { method: 'DELETE' })
    const responseData: UniversalResponseAPIType<AuthUserData> = await response.json()
    return {
      status: response.status,
      errors: responseData.errors
    }
  },
  async deleteRegistration () {
    const response = await fetch('/api/register', { method: 'DELETE' })
    const responseData: UniversalResponseAPIType<AuthUserData> = await response.json()
    return {
      status: response.status,
      errors: responseData.errors
    }
  },
  async product (product: IProductR): Promise<filteredResponse<IProductR[]>> {
    const response = await fetch(`/api/product/${product.id}`, { method: 'DELETE' })
    const responseData: UniversalResponseAPIType<IProductR[]> = await response.json()
    return {
      status: response.status,
      data: responseData.data,
      errors: responseData.errors
    }
  },
  async productImage (deleteData: IDeleteImage): Promise<filteredResponse<IProductR>> {
    const response = await fetch(`/api/product/images/${deleteData.productId}`, { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(deleteData) })
    const responseData: UniversalResponseAPIType<IProductR> = await response.json()
    return {
      status: response.status,
      data: responseData.data,
      errors: responseData.errors
    }
  }
}