import { AdminModel, IAdmin } from './../models/admin';
import { TokenJWTPayload } from './../../app/types/serverApiTypes';
import { NextApiResponse } from 'next';
import { IProfileData } from '../../app/types/profileSliceTypes';
import { ExtendedRequestType, UniversalResponseAPIType } from '../../app/types/serverApiTypes';
import jwt from 'jsonwebtoken'

export const profileAPIUtils = {
  async getAll (req: ExtendedRequestType<{}>, res: NextApiResponse<UniversalResponseAPIType<IProfileData>>) {
    try {
      const token = req.cookies.token
      if (!token) return res.status(422).json({ errors: [{ param: 'origin', msg: 'Нет Токена' }] })

      const isTokenValid = await jwt.verify(token, process.env.JWT_SECRET || 'secret') as TokenJWTPayload
      if (!isTokenValid) return res.status(422).json({ errors: [{ param: 'origin', msg: 'Неверный токен' }] })

      const profileData = await AdminModel.findOne({ id: isTokenValid.id }) as IAdmin
      if (!profileData) return res.status(422).json({ errors: [{ param: 'origin', msg: 'Профиль не найден' }] })

      res.status(200).json({ data: {
        firstName: profileData.firstName,
        secondName: profileData.secondName,
        email: profileData.email,
        login: profileData.login,
        id: String(profileData._id),
        image: profileData.image ? profileData.image : 'none'
      } })

    } catch (error) {
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
  async put (req: ExtendedRequestType<{}>, res: NextApiResponse<UniversalResponseAPIType<IProfileData>>) {
    try {
    } catch (error) {
    }
  }
}