import { IProductR } from './../../app/types/serverApiTypes';
import { IProduct } from './../models/product';
export const ProductMapping = {
  modelToResponse (products: IProduct[]): IProductR[] {
    return products.map(product => ({
      id: String(product._id),
      name: product.name,
      description: product.description,
      amount: product.amount,
      code: product.code,
      image: product.images,
      price: product.price
    }))
  } 
}