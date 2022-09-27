import mongoose, { model, Model, ObjectId, Schema } from 'mongoose';

export interface IReview {
  _id: ObjectId
  authorId: string
  authorName: string
  productId: string
  productName: string
  rating: number
  date: number
  positive: string
  negative: string
  comment: string
  likes: number
}

const ReviewSchema = new Schema<IReview>({
  authorId: String,
  authorName: String,
  productId: String,
  productName: String,
  negative: String,
  positive: String,
  comment: String,
  date: Number,
  likes: Number,
  rating: Number
})

export const ReviewModel = mongoose.models.ReviewModel as Model<IReview, {}, {}, {}, IReview> || model<IReview>('ReviewModel', ReviewSchema)