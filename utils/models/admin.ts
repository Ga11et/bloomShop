import mongoose, { model, Schema } from 'mongoose';

export type userRole = 'user' | 'admin'

interface IAdmin {
  login: string
  password: string
  role: userRole
}

const AdminSchema = new Schema<IAdmin>({
  login: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: 'user' }
})

export const AdminModel = mongoose.models.AdminModel || model<IAdmin>('AdminModel', AdminSchema)
