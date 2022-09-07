import mongoose, { model, Schema } from 'mongoose';

export type userRole = 'user' | 'admin' | 'none'

interface IAdmin {
  login: string
  password: string
  firstName: string
  secondName: string
  email: string
  role: userRole
}

const AdminSchema = new Schema<IAdmin>({
  login: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  secondName: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true, default: 'user' }
})

export const AdminModel = mongoose.models.AdminModel || model<IAdmin>('AdminModel', AdminSchema)