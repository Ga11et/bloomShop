import mongoose, { model, Schema } from 'mongoose';

const AdminSchema = new Schema({
  login: { type: String, required: true },
  password: { type: String, required: true },
})

export default mongoose.models.AdminModel || model('AdminModel', AdminSchema)