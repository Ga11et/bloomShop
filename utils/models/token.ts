import mongoose, { Model, model, ObjectId, Schema } from 'mongoose';

export interface IToken {
  _id: ObjectId
  id: string
  token: string
}

const TokenSchema = new Schema<IToken>({
  id: { type: String, required: true },
  token: { type: String, required: true }
})

export const TokenModel = mongoose.models.TokenModel as Model<IToken> || model<IToken>('TokenModel', TokenSchema) 