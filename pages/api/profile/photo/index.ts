import mongoose from 'mongoose'
import { NextApiRequest, NextApiResponse } from 'next'
import { profileAPIUtils } from '../../../../utils/api/profile'

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const mongoDBUrl = process.env.MONGODB_CONNECT_TOKEN || ''

  try {
    await mongoose.connect(mongoDBUrl)

    switch (req.method) {
      case 'GET':
        break
      case 'POST':
        break
      case 'DELETE':
        break
      case 'PUT':
        profileAPIUtils.updatePhoto(req, res)
        break
      default:
        break;
    }

  } catch (error) {
    console.log(error)
    res.status(400).json({ errors: [{ param: 'origin', msg: String(error) }] })
  }

  

}