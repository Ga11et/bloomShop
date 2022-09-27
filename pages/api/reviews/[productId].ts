import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import { reviewAPIUtils } from '../../../utils/api/review';
export default async (req: NextApiRequest, res: NextApiResponse) => {

  const mongoDbUrl = process.env.MONGODB_CONNECT_TOKEN || ''

  try {
    await mongoose.connect(mongoDbUrl)

    switch (req.method) {
      case 'GET':
        await reviewAPIUtils.getProductReviews(req, res)
        break
      case 'POST':
        break
      case 'PUT':
        break
      case 'DELETE':
        break
      default:
        break
    }
    
  } catch (error) {
    console.log(error)
    res.status(520).json({ errors: [{ param: 'origin', msg: String(error) }] })
  }
}