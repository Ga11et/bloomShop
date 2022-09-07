import mongoose from 'mongoose'
import { NextApiResponse } from 'next'
import { PostType } from '../../../app/types/clientApiTypes'
import { ExtendedRequestType } from '../../../app/types/serverApiTypes'
import { postAPIUtils } from '../../../utils/postAPI/postAPIUtils'

export default async (req: ExtendedRequestType<PostType>, res: NextApiResponse) => {

  const mongoDBUrl = process.env.MONGODB_CONNECT_TOKEN || ''

  try {
    await mongoose.connect(mongoDBUrl)

    switch (req.method) {
      case 'DELETE':
        await postAPIUtils.delete(req, res)
        break;
      case 'PUT':
        await postAPIUtils.update(req, res)
        break;
      default:
        res.status(200).json('prokol')
        break;
    }

  } catch (error) {
    res.status(400).json(error)
  }

  

}