import { IReviewR } from './../../app/types/serverApiTypes';
import { IProductR } from '../../app/types/serverApiTypes';
import { IProduct } from '../models/product';
import { IReview } from '../models/product/review';
import { ObjectId } from 'mongoose';
import { IProductImage } from '../../app/types/clientApiTypes';
export const MTRMapping = {
  product (products: IProduct[]): IProductR[] {
    return products.map(product => ({
      id: String(product._id),
      name: product.name,
      description: product.description,
      amount: product.amount,
      code: product.code,
      image: product.images.map(image => ({ id: String(image._id), url: image.url, small: image.small, publicId: image.publicId })),
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
  },
  image (images: { _id?: ObjectId, url: string, small: string, publicId: string }[]): IProductImage[] {
    return images.map(image => ({
      id: String(image._id),
      small: image.small,
      url: image.url,
      publicId: image.publicId
    }))
  }
}