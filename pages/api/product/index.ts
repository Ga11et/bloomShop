import { productAPIUtils } from '../../../utils/api/product';
import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const mongoDbUrl = process.env.MONGODB_CONNECT_TOKEN || ''

  try {
    await mongoose.connect(mongoDbUrl)

    switch (req.method) {
      case 'GET':
        await productAPIUtils.getAll(req, res)
        break;
      case 'POST':
        await productAPIUtils.post(req, res)
        break;
      case 'DELETE':
        break;
      case 'PUT':
        break;
      default:
        break;
    }
  } catch (error) {
    console.log(error)
    res.status(520).json({ errors: [{ param: 'origin', msg: String(error) }] })
  }
}