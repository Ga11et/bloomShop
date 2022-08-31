import mongoose, { model, Schema } from 'mongoose';

const TokenSchema = new Schema({
  id: { type: String, required: true },
  token: { type: String, required: true }
})

export default mongoose.models.TokenModel || model('TokenModel', TokenSchema) 