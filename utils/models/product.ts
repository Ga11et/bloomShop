import mongoose, { model, Schema } from 'mongoose'

interface IProduct {
  name: string
  price: string
  image: string
  description: string
}

const ProductSchema = new Schema<IProduct>({
  name: { Type: String, required: true },
  price: { Type: String, required: true },
  image: { Type: String, required: true },
  description: { Type: String, required: true }
})

export const ProductModel = model<IProduct>('ProductModel', ProductSchema)