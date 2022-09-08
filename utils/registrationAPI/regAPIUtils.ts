import { NextApiResponse } from 'next';
import { AuthData, RegData } from '../../app/types/clientApiTypes';
import { AdminModel } from '../models/admin';
import { ExtendedRequestType, UniversalResponseAPIType } from './../../app/types/serverApiTypes';
import bcrypt from 'bcrypt'

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
      const userWithSameLogin = await AdminModel.find({ login: login })
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
  async delete (req: ExtendedRequestType<AuthData>, res: NextApiResponse) {
    try {
      
    } catch (error) {
      console.log('utils ' + error)
      res.status(400).json('utils ' + error)
    }
  }
}