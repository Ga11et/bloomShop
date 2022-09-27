import { TokenUtils } from './../token/tokenUtils';
import { ReviewModel } from './../models/product/review';
import { NextApiResponse } from 'next';
import { ExtendedRequestType, IReviewR, ISuccessR, UniversalResponseAPIType } from './../../app/types/serverApiTypes';
import { MTRMapping } from '../mapping/mtr';
import { IPostReview } from '../../app/types/clientApiTypes';
export const reviewAPIUtils = {
  async getProductReviews (req: ExtendedRequestType<{}>, res: NextApiResponse<UniversalResponseAPIType<IReviewR[]>>) {
    try {
      const { productId } = req.query

      const reviews = await ReviewModel.find({ productId: productId })

      res.status(200).json({ data: MTRMapping.review(reviews) })
    } catch (error) {
      console.log(error)
      return res.status(520).json({ errors: [{ param: 'origin', msg: String(error) }] })
    }
  },
  async postOne (req: ExtendedRequestType<IPostReview>, res: NextApiResponse<UniversalResponseAPIType<ISuccessR>>) {
    try {
      const { token } = req.cookies
      const { comment, negative, positive, productId, productName, rating } = req.body

      if (!token) return res.status(401).json({ errors: [{ param: 'origin', msg: 'Нет токена' }] })

      const tokenData = await TokenUtils.isTokenValid(token)
      if (!tokenData) return res.status(401).json({ errors: [{ param: 'origin', msg: 'Не валидный токен' }] })

      const isExist = await TokenUtils.isTokenExist(token)
      if (!isExist) return res.status(401).json({ errors: [{ param: 'origin', msg: 'Данного токена нет в базе' }] })
      
      await ReviewModel.create({ 
        authorId: tokenData.id, authorName: tokenData.login,
        productId, productName,
        comment, negative, positive, rating,
        likes: 0, date: Date.now()
      })

      res.status(200).json({ data: { isSuccess: true } })
    } catch (error) {
      console.log(error)
      return res.status(520).json({ errors: [{ param: 'origin', msg: String(error) }] })
    }
  }
}