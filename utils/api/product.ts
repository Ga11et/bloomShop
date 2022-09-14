import { IProduct } from './../models/product';
import { IProductR } from '../../app/types/serverApiTypes';
import { IPostProductType } from '../../app/types/clientApiTypes';
import { NextApiResponse } from 'next';
import { ExtendedRequestType, UniversalResponseAPIType } from '../../app/types/serverApiTypes';
import { ProductModel } from '../models/product';
import { AppModel, IAppModel } from '../models/app';

export const productAPIUtils = {
  async getAll (req: ExtendedRequestType<{}>, res: NextApiResponse<UniversalResponseAPIType<IProductR[]>>) {
    try {
      const products = await ProductModel.find()
      res.status(200).json({ data: products.map(product => ({
        id: String(product._id),
        name: product.name,
        description: product.description,
        amount: product.amount,
        code: product.code,
        image: product.images,
        price: product.price
      })) })
    } catch (error) {
      console.log('utils ' + error)
      res.status(400).json({ errors: [{ param: 'origin', msg: String(error) }] })
    }
  },
  async getAllPaths (req: ExtendedRequestType<{}>, res: NextApiResponse<UniversalResponseAPIType<string[]>>) {
    try {
      const products = await ProductModel.find()
      res.status(200).json({ data: products.map(product => product._id.toString()) })
    } catch (error) {
      console.log('utils ' + error)
      res.status(400).json({ errors: [{ param: 'origin', msg: String(error) }] })
    }
  },
  async getOneProduct (req: ExtendedRequestType<{}>, res: NextApiResponse<UniversalResponseAPIType<IProductR>>) {
    try {
      const { productId } = req.query
      const product = await ProductModel.findById(productId)
      if (!product) return res.status(400).json({ errors: [{ param: 'origin', msg: 'Продукта с данным id не найдено' }] })

      res.status(200).json({ data: { 
        id: product._id.toString(),
        name: product.name,
        description: product.description,
        price: product.price,
        code: product.code,
        amount: product.amount,
        image: product.images,
      } })
    } catch (error) {
      console.log('utils ' + error)
      res.status(400).json({ errors: [{ param: 'origin', msg: String(error) }] })
    }
  },
  async post (req: ExtendedRequestType<IPostProductType>, res: NextApiResponse<UniversalResponseAPIType<IProductR[]>>) {
    try {
      const { token } = req.cookies
      const { name, description, image, amount, price } = req.body

      const appInfo = await AppModel.findOne({ app: 'mainInfo' }) as IAppModel

      await ProductModel.create({ name, description, amount, price, code: appInfo.productCode + 1 })
      await AppModel.findByIdAndUpdate(appInfo._id, { productCode: appInfo.productCode + 1 })
      const products = await ProductModel.find() as IProduct[]

      res.status(200).json({ data: products.map(product => ({
        id: String(product._id),
        name: product.name,
        description: product.description,
        amount: product.amount,
        code: product.code,
        image: product.images,
        price: product.price
      })) })
    } catch (error) {
      console.log('utils ' + error)
      res.status(400).json({ errors: [{ param: 'origin', msg: String(error) }] })
    }
  },
  async delete (req: ExtendedRequestType<IPostProductType>, res: NextApiResponse) {

  },
  async put (req: ExtendedRequestType<IPostProductType>, res: NextApiResponse) {

  }
}