import { AdminModel, IAdmin } from './../models/admin';
import { TokenJWTPayload } from './../../app/types/serverApiTypes';
import { NextApiResponse } from 'next';
import { IProfileData } from '../../app/types/profileSliceTypes';
import { ExtendedRequestType, UniversalResponseAPIType } from '../../app/types/serverApiTypes';
import jwt from 'jsonwebtoken'
import { IPostStatusData, IUpdateProfileData, IUpdateProfilePhoto } from '../../app/types/clientApiTypes';
import { IToken, TokenModel } from '../models/token';
import cloudinary from '../servises/cloudinary';

export const profileAPIUtils = {
  async getAll (req: ExtendedRequestType<{}>, res: NextApiResponse<UniversalResponseAPIType<IProfileData>>) {
    try {
      const token = req.cookies.token
      if (!token) return res.status(422).json({ errors: [{ param: 'origin', msg: 'Нет Токена' }] })

      const isTokenValid = await jwt.verify(token, process.env.JWT_SECRET || 'secret') as TokenJWTPayload
      if (!isTokenValid) return res.status(422).json({ errors: [{ param: 'origin', msg: 'Неверный токен' }] })

      const existingToken = await TokenModel.findOne({ id: isTokenValid.id }) as IToken
      if (!existingToken) return res.status(400).json({ errors: [{ param: 'origin', msg: 'Токена нет в базе' }] })

      const profileData = await AdminModel.findById(isTokenValid.id) as IAdmin
      if (!profileData) return res.status(422).json({ errors: [{ param: 'origin', msg: 'Профиль не найден' }] })

      res.status(200).json({ data: {
        firstName: profileData.firstName,
        secondName: profileData.secondName,
        email: profileData.email,
        login: profileData.login,
        id: String(profileData._id),
        image: profileData.image,
        status: profileData.status
      } })

    } catch (error) {
      return res.status(400).json({ errors: [{ param: 'origin', msg: String(error) }] })
    }
  },
  async post (req: ExtendedRequestType<{}>, res: NextApiResponse<UniversalResponseAPIType<IProfileData>>) {
    try {
    } catch (error) {
    }
  },
  async delete (req: ExtendedRequestType<{}>, res: NextApiResponse<UniversalResponseAPIType<IProfileData>>) {
    try {
    } catch (error) {
    }
  },
  async put (req: ExtendedRequestType<IUpdateProfileData>, res: NextApiResponse<UniversalResponseAPIType<IProfileData>>) {
    try {
      const { email, firstName, login, secondName } = req.body
      const { token } = req.cookies

      if (!token) return res.status(422).json({ errors: [{ param: 'origin', msg: 'Нет Токена' }] })

      const isTokenValid = await jwt.verify(token, process.env.JWT_SECRET || 'secret') as TokenJWTPayload
      if (!isTokenValid) return res.status(422).json({ errors: [{ param: 'origin', msg: 'Неверный токен' }] })

      const existingToken = await TokenModel.findOne({ id: isTokenValid.id }) as IToken
      if (!existingToken) return res.status(400).json({ errors: [{ param: 'origin', msg: 'Токена нет в базе' }] })

      const profileData = await AdminModel.findById(isTokenValid.id) as IAdmin
      if (!profileData) return res.status(422).json({ errors: [{ param: 'origin', msg: 'Профиль не найден' }] })

      await AdminModel.updateOne({ _id: isTokenValid.id }, { firstName, secondName, login, email })
      const newProfileData = await AdminModel.findById(isTokenValid.id) as IAdmin

      res.status(200).json({ data: {
        firstName: newProfileData.firstName,
        secondName: newProfileData.secondName,
        email: newProfileData.email,
        login: newProfileData.login,
        id: String(newProfileData._id),
        image: newProfileData.image,
        status: newProfileData.status
      } })

    } catch (error) {
    }
  },
  async postStatus (req: ExtendedRequestType<IPostStatusData>, res: NextApiResponse<UniversalResponseAPIType<IProfileData>>) {
    try {
      const { newStatus } = req.body
      const token = req.cookies.token
      if (!token) return res.status(422).json({ errors: [{ param: 'origin', msg: 'Нет Токена' }] })

      const isTokenValid = await jwt.verify(token, process.env.JWT_SECRET || 'secret') as TokenJWTPayload
      if (!isTokenValid) return res.status(422).json({ errors: [{ param: 'origin', msg: 'Неверный токен' }] })

      const profileData = await AdminModel.findById(isTokenValid.id) as IAdmin
      if (!profileData) return res.status(422).json({ errors: [{ param: 'origin', msg: 'Профиль не найден' }] })

      await AdminModel.updateOne({ _id: isTokenValid.id }, { status: newStatus })
      const newProfileData = await AdminModel.findById(isTokenValid.id) as IAdmin

      res.status(200).json({ data: {
        firstName: newProfileData.firstName,
        secondName: newProfileData.secondName,
        email: newProfileData.email,
        login: newProfileData.login,
        id: String(newProfileData._id),
        image: newProfileData.image,
        status: newProfileData.status
      } })

    } catch (error) {
      return res.status(400).json({ errors: [{ param: 'origin', msg: String(error) }] })
    }
  },
  async updatePhoto (req: ExtendedRequestType<IUpdateProfilePhoto>, res: NextApiResponse<UniversalResponseAPIType<IProfileData>>) {
    try {
      const { newPhoto } = req.body
      const token = req.cookies.token
      if (!token) return res.status(422).json({ errors: [{ param: 'origin', msg: 'Нет Токена' }] })

      const isTokenValid = await jwt.verify(token, process.env.JWT_SECRET || 'secret') as TokenJWTPayload
      if (!isTokenValid) return res.status(422).json({ errors: [{ param: 'origin', msg: 'Неверный токен' }] })

      const profileData = await AdminModel.findById(isTokenValid.id) as IAdmin
      if (!profileData) return res.status(422).json({ errors: [{ param: 'origin', msg: 'Профиль не найден' }] })

      const cloudResp = await cloudinary.uploader.upload(newPhoto, { folder: 'bloomShop' })

      await AdminModel.findByIdAndUpdate(isTokenValid.id, { image: cloudResp.secure_url })
      const newProfileData = await AdminModel.findById(isTokenValid.id) as IAdmin

      res.status(200).json({ data: {
        firstName: newProfileData.firstName,
        secondName: newProfileData.secondName,
        email: newProfileData.email,
        login: newProfileData.login,
        id: String(newProfileData._id),
        image: newProfileData.image,
        status: newProfileData.status
      } })

    } catch (error) {
      return res.status(400).json({ errors: [{ param: 'origin', msg: String(error) }] })
    }
  },
}