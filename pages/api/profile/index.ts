import { IProfileData } from './../../../app/types/profileSliceTypes';
import mongoose from 'mongoose'
import { NextApiResponse } from 'next'
import { ExtendedRequestType, UniversalResponseAPIType } from '../../../app/types/serverApiTypes'
import { profileAPIUtils } from '../../../utils/api/profile';

export default async (req: ExtendedRequestType<{}>, res: NextApiResponse<UniversalResponseAPIType<IProfileData>>) => {

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
        break
      default:
        break;
    }

  } catch (error) {
    console.log(error)
    res.status(400).json({ errors: [{ param: 'origin', msg: String(error) }] })
  }

  

}