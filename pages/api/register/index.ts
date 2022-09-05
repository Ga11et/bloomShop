import mongoose from 'mongoose'
import { NextApiResponse } from 'next'
import { ExtendedRequestType } from '../../../app/types/serverApiTypes'
import { AuthData } from '../../../app/types/clientApiTypes'
import bcrypt from 'bcrypt'
import { AdminModel } from '../../../utils/models/admin'
import { regAPIUtils } from '../../../utils/registrationAPI/regAPIUtils'

export default async (req: ExtendedRequestType<AuthData>, res: NextApiResponse) => {

  const mongoDBUrl = process.env.MONGODB_CONNECT_TOKEN || ''

  try {
    await mongoose.connect(mongoDBUrl)

    switch (req.method) {
      case 'GET':
        break
      case 'POST':
        regAPIUtils.post(req, res)
        break;
      default:
        res.status(200).json('work')
        break;
    }

  } catch (error) {
    res.status(400).json(error)
  }
}