import { ProductThunks } from './productThunks';
import { createSlice } from '@reduxjs/toolkit';
import { ErrorType, IProductR } from '../../../types/serverApiTypes';

interface IProductSlice {
  products: IProductR[]
  isLoaded: boolean
  isSuccess: boolean
  errors: ErrorType[]
}

const initialState: IProductSlice = {
  products: [],
  errors: [],
  isLoaded: false,
  isSuccess: false
}

const ProductsSlice = createSlice({
  name: 'ProductsSlice',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder.addCase(ProductThunks.postProduct.pending, (state) => {
      state.isLoaded = true
      state.products = []
      state.errors = []
      state.isSuccess = false
    })
    builder.addCase(ProductThunks.postProduct.fulfilled, (state, action) => {
      state.isLoaded = false
      if (action.payload.status === 200 && action.payload.data) {
        state.products = action.payload.data
        state.isSuccess = true
      }
      if (action.payload.status !== 200 && action.payload.errors) {
        state.errors = action.payload.errors
      }
    })
  },
})

export default ProductsSlice.reducer