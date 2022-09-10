import mongoose, { model, Model, ObjectId, Schema } from 'mongoose';

export interface IAppModel {
  _id: ObjectId
  app?: String
  productCode: number
}

const AppSchema = new Schema<IAppModel>({
  productCode: Number,
  app: String
})

export const AppModel = mongoose.models.AppModel as Model<IAppModel, {}, {}, {}, IAppModel> || model<IAppModel>('AppModel', AppSchema)