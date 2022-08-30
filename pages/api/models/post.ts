import mongoose, { model, Schema } from 'mongoose'


const PostSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
})

module.exports = mongoose.models.PostModel || model('PostModel', PostSchema)