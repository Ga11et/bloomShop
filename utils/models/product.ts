import mongoose, { Model, model, ObjectId, Schema } from 'mongoose'

export interface IProduct {
  _id: ObjectId
  code: number
  name: string
  price: string
  images: string[]
  description: string
  amount: number
}

const ProductSchema = new Schema<IProduct>({
  name: String,
  price: String,
  images: [String],
  description: String,
  amount: Number,
  code: Number
}, { capped: { autoIndexId: true } })

export const ProductModel = mongoose.models.ProductModel as Model<IProduct, {}, {}, {}, IProduct> || model<IProduct>('ProductModel', ProductSchema)