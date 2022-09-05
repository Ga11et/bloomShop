import { NextApiResponse } from 'next';
import { ProductType } from '../../app/types/clientApiTypes';
import { ExtendedRequestType } from '../../app/types/serverApiTypes';
import { ProductModel } from '../models/product';

export const productAPIUtils = {
  async getAll (req: ExtendedRequestType<{}>, res: NextApiResponse) {
    try {
      const products = await ProductModel.find()
      res.status(200).json(products)
    } catch (error) {
      console.log('utils ' + error)
      res.status(400).json('utils ' + error)
    }
  },
  async post (req: ExtendedRequestType<ProductType>, res: NextApiResponse) {
    try {
      await ProductModel.create(req.body.data)
      res.status(200).json('ok')
    } catch (error) {
      console.log('utils ' + error)
      res.status(400).json('utils ' + error)
    }
  },
  async delete (req: ExtendedRequestType<ProductType>, res: NextApiResponse) {

  },
  async put (req: ExtendedRequestType<ProductType>, res: NextApiResponse) {

  }
}