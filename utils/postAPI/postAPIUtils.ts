import { NextApiResponse } from 'next';
import { ExtendedRequestType, PostModelType } from '../../app/types/serverApiTypes';
import { PostType } from '../../app/types/clientApiTypes';
import PostModel from '../models/post'

export const postAPIUtils = {
  async get(req: ExtendedRequestType<PostType>, res: NextApiResponse) {
    const posts = await PostModel.find()
    res.status(200).json(posts)
  },
  async post(req: ExtendedRequestType<PostType>, res: NextApiResponse) {
    await PostModel.create(req.body)
    const posts = await PostModel.find()
    res.status(200).json(posts)
  },
  async delete(req: ExtendedRequestType<PostType>, res: NextApiResponse) {
    const deletePost = await PostModel.findById(req.query.postId)
    await PostModel.deleteOne({ deletePost })
    const posts = await PostModel.find()
    res.status(200).json(posts)
  },
  async update (req: ExtendedRequestType<PostType>, res: NextApiResponse) {
    const putPost = await PostModel.findById(req.query.postId)
    await PostModel.replaceOne(putPost, { title: req.body.title, description: req.body.description })
    const posts = await PostModel.find()
    res.status(200).json(posts)
  }
}