import { IProfileData } from './../../../app/types/profileSliceTypes';
import mongoose from 'mongoose'
import { NextApiRequest, NextApiResponse } from 'next'
import { UniversalResponseAPIType } from '../../../app/types/serverApiTypes'
import { profileAPIUtils } from '../../../utils/api/profile';

export default async (req: NextApiRequest, res: NextApiResponse<UniversalResponseAPIType<IProfileData>>) => {

  const mongoDBUrl = process.env.MONGODB_CONNECT_TOKEN || ''

  try {
    await mongoose.connect(mongoDBUrl)

    switch (req.method) {
      case 'GET':
        await profileAPIUtils.getAll(req, res)
        break
      case 'POST':
        break
      case 'DELETE':
        break
      case 'PUT':
        await profileAPIUtils.put(req, res)
        break
      default:
        break;
    }

  } catch (error) {
    console.log(error)
    res.status(400).json({ errors: [{ param: 'origin', msg: String(error) }] })
  }
}