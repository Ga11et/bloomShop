import mongoose, { Model, model, ObjectId, Schema, StringExpressionOperatorReturningString } from 'mongoose'

export interface IProduct {
  _id: ObjectId
  code: number
  name: string
  price: string
  images: {
    _id?: ObjectId
    url: string
    small: string
    publicId: string
  }[]
  description: string
  amount: number
}

const ProductSchema = new Schema<IProduct>({
  name: String,
  price: String,
  images: [{
    url: String,
    small: String,
    publicId: String
  }],
  description: String,
  amount: Number,
  code: Number
}, { capped: { autoIndexId: true } })

export const ProductModel = mongoose.models.ProductModel as Model<IProduct, {}, {}, {}, IProduct> || model<IProduct>('ProductModel', ProductSchema)