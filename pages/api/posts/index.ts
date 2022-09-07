import mongoose from 'mongoose'
import { NextApiResponse } from 'next'
import { PostType } from '../../../app/types/clientApiTypes'
import { ExtendedRequestType, PostModelType } from '../../../app/types/serverApiTypes'
import { postAPIUtils } from '../../../utils/postAPI/postAPIUtils'

export default async (req: ExtendedRequestType<PostType>, res: NextApiResponse) => {

  const mongoDBUrl = process.env.MONGODB_CONNECT_TOKEN || ''

  try {
    await mongoose.connect(mongoDBUrl)

    switch (req.method) {
      case 'GET':
        await postAPIUtils.get(req, res)
        break
      case 'POST':
        await postAPIUtils.post(req, res)
        break;
      case 'DELETE':
        console.log('prikol')
        break;
      default:
        return res.status(400).json('Пришло туда куда не должно было приходить')
    }

  } catch (error) {
    res.status(400).json(error)
  }

  

}