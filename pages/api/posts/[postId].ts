import mongoose from 'mongoose'
import { NextApiResponse } from 'next'
import { ExtendedRequestType } from '../../../app/types/apiTypes'
import { PostType } from '../../../app/types/types'
const PostModel = require('../models/post')

export default async (req: ExtendedRequestType<PostType>, res: NextApiResponse) => {

  const mongoDBUrl = process.env.MONGODB_CONNECT_TOKEN || ''

  try {
    await mongoose.connect(mongoDBUrl)

    switch (req.method) {
      case 'DELETE':
        const deletePost = await PostModel.findById(req.query.postId)
        await PostModel.deleteOne({ deletePost })
        res.status(200).json('ok')
        break;
      case 'PUT':
        const putPost = await PostModel.findById(req.query.postId)
        await PostModel.replaceOne(putPost, { title: req.body.title, description: req.body.description })
        res.status(200).json('ok')
        break;
      default:
        res.status(200).json('prokol')
        break;
    }

  } catch (error) {
    res.status(400).json(error)
  }

  

}