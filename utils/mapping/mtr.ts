import { IReviewR } from './../../app/types/serverApiTypes';
import { IProductR } from '../../app/types/serverApiTypes';
import { IProduct } from '../models/product';
import { IReview } from '../models/product/review';
export const MTRMapping = {
  product (products: IProduct[]): IProductR[] {
    return products.map(product => ({
      id: String(product._id),
      name: product.name,
      description: product.description,
      amount: product.amount,
      code: product.code,
      image: product.images,
      price: product.price
    }))
  },
  review (reviews: IReview[]): IReviewR[] {
    return reviews.map(review => ({
      id: String(review._id),
      authorId: review.authorId,
      authorName: review.authorName,
      productId: review.productId,
      productName: review.productName,
      negative: review.negative,
      positive: review.positive,
      comment: review.comment,
      rating: review.rating,
      date: review.date,
      likes: review.likes
    }))
  } 
}