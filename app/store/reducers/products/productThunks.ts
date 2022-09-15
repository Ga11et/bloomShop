import { updateAPI } from './../../../api/updateAPI';
import { IProductR } from './../../../types/serverApiTypes';
import { postAPI } from './../../../api/postAPI';
import { IPostProductType, IUpdateProduct } from './../../../types/clientApiTypes';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAPI } from '../../../api/fetchAPI';
import { deleteAPI } from '../../../api/deleteAPI';
export const ProductThunks = {
  postProduct: createAsyncThunk(
    'postProduct',
    async (productData: IPostProductType) => {
      const response = await postAPI.product(productData)
      return response
    }
  ),
  getProducts: createAsyncThunk(
    'getProducts',
    async () => {
      const response = await fetchAPI.products()
      return response
    }
  ),
  getOneProduct: createAsyncThunk(
    'getOneProduct',
    async (productId: string) => {
      const response = await fetchAPI.productById(productId)
      return response
    }
  ),
  deleteProduct: createAsyncThunk(
    'deleteProduct',
    async (productData: IProductR) => {
      const response = await deleteAPI.product(productData)
      return response
    }
  ),
  updateProduct: createAsyncThunk(
    'updateProduct',
    async (productData: IUpdateProduct) => {
      const response = await updateAPI.product(productData)
      return response
    }
  )
}