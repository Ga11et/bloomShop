import { postAPI } from './../../../api/postAPI';
import { IPostProductType } from './../../../types/clientApiTypes';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const ProductThunks = {
  postProduct: createAsyncThunk(
    'postProduct',
    async (productData: IPostProductType) => {
      const response = await postAPI.product(productData)
      return response
    }
  )
}