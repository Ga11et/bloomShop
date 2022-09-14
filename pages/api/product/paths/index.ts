import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import { productAPIUtils } from '../../../../utils/api/product';

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const mongoDbUrl = process.env.MONGODB_CONNECT_TOKEN || ''

  try {
    await mongoose.connect(mongoDbUrl)

    switch (req.method) {
      case 'GET':
        await productAPIUtils.getAllPaths(req, res)
        break;
      case 'POST':
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