import mongoose from 'mongoose'
import { NextApiResponse } from 'next'
import { AdminModelType, ExtendedRequestType } from '../../../app/types/serverApiTypes'
import { AuthData } from '../../../app/types/clientApiTypes'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { authAPIUtils } from '../../../utils/authAPI/authUtils'

export default async (req: ExtendedRequestType<AuthData>, res: NextApiResponse) => {

  const mongoDBUrl = process.env.MONGODB_CONNECT_TOKEN || ''

  try {
    await mongoose.connect(mongoDBUrl)

    switch (req.method) {
      case 'GET':
        await authAPIUtils.get(req, res)
        break
      case 'POST':
        await authAPIUtils.post(req, res)
        break
      case 'DELETE':
        await authAPIUtils.delete(req, res)
        break
      default:
        res.status(200).json('work')
        break;
    }

  } catch (error) {
    console.log(error)
    res.status(400).json({ error: error })
  }

  

}