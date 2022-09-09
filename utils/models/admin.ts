import mongoose, { model, ObjectId, Schema } from 'mongoose';

export type userRole = 'user' | 'admin' | 'none'

export interface IAdmin {
  _id: ObjectId
  login: string
  password: string
  firstName: string
  secondName: string
  email: string
  role: userRole
  image: string
  status: string
}

const AdminSchema = new Schema<IAdmin>({
  login: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  secondName: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true, default: 'user' },
  status: { type: String, required: true, default: 'Статус' },
  image: { type: String, required: true, default: 'none' },
})

export const AdminModel = mongoose.models.AdminModel || model<IAdmin>('AdminModel', AdminSchema)