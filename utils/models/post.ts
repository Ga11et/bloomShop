import mongoose, { model, Schema } from 'mongoose'

export interface IPost {
  title: string
  description: string
}

const PostSchema = new Schema<IPost>({
  title: { type: String, required: true },
  description: { type: String, required: true },
})

export default mongoose.models.PostModel || model<IPost>('PostModel', PostSchema)