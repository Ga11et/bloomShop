import mongoose from 'mongoose'
import { NextApiResponse } from 'next'
import { ExtendedRequestType } from '../../../app/types/apiTypes'
import { PostType } from '../../../app/types/types'
import { postAPIUtils } from '../../../utils/authAPI/postUtils'

export default async (req: ExtendedRequestType<PostType>, res: NextApiResponse) => {

  const mongoDBUrl = process.env.MONGODB_CONNECT_TOKEN || ''

  try {
    await mongoose.connect(mongoDBUrl)

    switch (req.method) {
      case 'DELETE':
        postAPIUtils.delete(req, res)
        break;
      case 'PUT':
        postAPIUtils.update(req, res)
        break;
      default:
        res.status(200).json('prokol')
        break;
    }

  } catch (error) {
    res.status(400).json(error)
  }

  

}