import mongoose from 'mongoose'
import { NextApiResponse } from 'next'
import { ExtendedRequestType } from '../../../app/types/apiTypes'
import { AuthData } from '../../../app/types/clientApiTypes'
import bcrypt from 'bcrypt'
const AdminModel = require('../models/admin')


export default async (req: ExtendedRequestType<AuthData>, res: NextApiResponse) => {

  const mongoDBUrl = process.env.MONGODB_CONNECT_TOKEN || ''

  try {
    await mongoose.connect(mongoDBUrl)

    switch (req.method) {
      case 'GET':
        break
      case 'POST':
        const bcryptedPass = bcrypt.hashSync(req.body.password, 7)
        await AdminModel.create({ login: req.body.login, password: bcryptedPass })
        res.status(200).json('ok')
        break;
      default:
        res.status(200).json('work')
        break;
    }

  } catch (error) {
    res.status(400).json(error)
  }
}