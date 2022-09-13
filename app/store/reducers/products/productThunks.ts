import { postAPI } from './../../../api/postAPI';
import { IPostProductType } from './../../../types/clientApiTypes';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAPI } from '../../../api/fetchAPI';
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
  )
}