import { ProductThunks } from './productThunks';
import { createSlice } from '@reduxjs/toolkit';
import { ErrorType, IProductR } from '../../../types/serverApiTypes';

interface IProductSlice {
  products: IProductR[]
  activeProduct: IProductR | null
  isLoaded: boolean
  isSuccess: boolean
  errors: ErrorType[]
}

const initialState: IProductSlice = {
  products: [],
  activeProduct: null,
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
    builder.addCase(ProductThunks.getProducts.pending, (state) => {
      state.isLoaded = false
      state.products = []
      state.errors = []
    })
    builder.addCase(ProductThunks.getProducts.fulfilled, (state, action) => {
      state.isLoaded = true
      if (action.payload.status === 200 && action.payload.data) {
        state.products = action.payload.data
      }
      if (action.payload.status !== 200 && action.payload.errors) {
        state.errors = action.payload.errors
      }
    })
    builder.addCase(ProductThunks.deleteProduct.pending, (state) => {
      state.isLoaded = false
      state.errors = []
    })
    builder.addCase(ProductThunks.deleteProduct.fulfilled, (state, action) => {
      state.isLoaded = true
      if (action.payload.status === 200 && action.payload.data) {
        state.products = action.payload.data
      }
      if (action.payload.status !== 200 && action.payload.errors) {
        state.errors = action.payload.errors
      }
    })
    builder.addCase(ProductThunks.getOneProduct.pending, (state) => {
      state.isLoaded = false
      state.activeProduct = null
      state.errors = []
    })
    builder.addCase(ProductThunks.getOneProduct.fulfilled, (state, action) => {
      state.isLoaded = true
      if (action.payload.status === 200 && action.payload.data) {
        state.activeProduct = action.payload.data
      }
      if (action.payload.status !== 200 && action.payload.errors) {
        state.errors = action.payload.errors
      }
    })
    builder.addCase(ProductThunks.updateProduct.pending, (state) => {
      state.isLoaded = false
      state.errors = []
    })
    builder.addCase(ProductThunks.updateProduct.fulfilled, (state, action) => {
      state.isLoaded = true
      if (action.payload.status === 200 && action.payload.data) {
        state.products = action.payload.data
        state.activeProduct = action.payload.data.find(product => product.id === state.activeProduct?.id) || null
      }
      if (action.payload.status !== 200 && action.payload.errors) {
        state.errors = action.payload.errors
      }
    })
  }
})

export default ProductsSlice.reducer