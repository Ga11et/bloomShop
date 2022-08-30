import mongoose from 'mongoose'
import { NextApiResponse } from 'next'
import { ExtendedRequestType } from '../../app/types/apiTypes'
import { PostType } from '../../app/types/types'
const PostModel = require('./models/post')

export default async (req: ExtendedRequestType<PostType>, res: NextApiResponse) => {

  const mongoDBUrl = process.env.MONGODB_CONNECT_TOKEN || ''

  try {
    await mongoose.connect(mongoDBUrl)

    switch (req.method) {
      case 'POST':
        await PostModel.create(req.body)
        res.status(200).json('ok')
        break;
      case 'DELETE':
        console.log('prikol')
        break;
      default:
        const posts = await PostModel.find()
        res.status(200).json(posts)
        break;
    }

  } catch (error) {
    res.status(400).json(error)
  }

  

}