import { NextApiResponse } from 'next';
import { AuthData, RegData } from '../../app/types/clientApiTypes';
import { AdminModel, IAdmin } from '../models/admin';
import { ExtendedRequestType, TokenJWTPayload, UniversalResponseAPIType } from './../../app/types/serverApiTypes';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { IToken, TokenModel } from '../models/token';

export const regAPIUtils = {
  async get (req: ExtendedRequestType<{}>, res: NextApiResponse) {
    try {
      
    } catch (error) {
      console.log('utils ' + error)
      res.status(400).json('utils ' + error)
    }
  },
  async post (req: ExtendedRequestType<RegData>, res: NextApiResponse<UniversalResponseAPIType<{}>>) {
    try {
      const { email, firstName, login, password, secondName } = req.body

      if (!login) return res.status(400).json({ errors: [{ param: 'login', msg: 'Это поле должно быть заполнено' }] })
      
      const userWithSameLogin = await AdminModel.findOne({ login: login }) as IAdmin
      if (userWithSameLogin) return res.status(400).json({ errors: [{ param: 'login', msg: 'Пользователь с данным логином уже существует' }] })

      const bcryptedPass = bcrypt.hashSync(password, 7)
      await AdminModel.create({
        login: login,
        password: bcryptedPass,
        firstName: firstName,
        secondName: secondName,
        email: email
      })
      return res.status(200).json({})
    } catch (error) {
      return res.status(400).json({ errors: [{ param: 'origin', msg: String(error) }] })
    }
  },
  async put (req: ExtendedRequestType<AuthData>, res: NextApiResponse) {
    try {
      
    } catch (error) {
      console.log('utils ' + error)
      res.status(400).json('utils ' + error)
    }
  },
  async delete (req: ExtendedRequestType<{}>, res: NextApiResponse<UniversalResponseAPIType<{}>>) {
    try {
      const { token } = req.cookies

      if (!token) return res.status(422).json({ errors: [{ param: 'origin', msg: 'Нет Токена' }] })

      const isTokenValid = await jwt.verify(token, process.env.JWT_SECRET || 'secret') as TokenJWTPayload
      if (!isTokenValid) return res.status(422).json({ errors: [{ param: 'origin', msg: 'Неверный токен' }] })

      const existingToken = await TokenModel.findOne({ id: isTokenValid.id }) as IToken
      if (!existingToken) return res.status(400).json({ errors: [{ param: 'origin', msg: 'Токена нет в базе' }] })

      await AdminModel.findByIdAndRemove(existingToken.id)

      res.status(200).json({})
    } catch (error) {
      console.log('utils ' + error)
      res.status(400).json({ errors: [{ param: 'origin', msg: String(error) }] })
    }
  }
}