import { NextApiResponse } from 'next'
import { AuthData } from '../../app/types/clientApiTypes'
import { AdminModelType, AuthUserData, ExtendedRequestType, TokenJWTPayload, TokenModelType, UniversalResponseAPIType } from '../../app/types/serverApiTypes'
import { AdminModel } from '../models/admin'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { TokenModel } from '../models/token'

export const authAPIUtils = {
  async post(req: ExtendedRequestType<AuthData>, res: NextApiResponse<UniversalResponseAPIType<AuthUserData>>) {
    const user: AdminModelType | null = await AdminModel.findOne({ login: req.body.login })
    if (!user) return res.status(400).json({ errors: [{ param: 'login', msg: 'Такого пользователя не существует' }] })

    const isPassValid = await bcrypt.compare(req.body.password, user.password)
    if (!isPassValid) return res.status(400).json({ errors: [{ param: 'password', msg: 'Пароль неверный' }] })

    const token = jwt.sign({ login: user.login, id: user._id, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: 1000*60*60*24 })

    const existingToken = await TokenModel.findOne({ id: user._id })
    if (existingToken) await TokenModel.deleteOne({ existingToken })
    await TokenModel.create({ id: user._id, token: token })

    res.setHeader("set-cookie", `token=${token}; samesite=lax; httponly;`)
    res.status(200).json({ data: { role: user.role, login: user.login, id: user._id } })
  },
  async get(req: ExtendedRequestType<AuthData>, res: NextApiResponse<UniversalResponseAPIType<AuthUserData>>) {
    const token = req.cookies.token

    if (!token) return res.status(400).json({ errors: [{ param: 'origin', msg: 'Токена нет' }] })

    const isTokenValid = jwt.verify(token, process.env.JWT_SECRET || 'secret') as TokenJWTPayload
    if (!isTokenValid) return res.status(400).json({ errors: [{ param: 'origin', msg: 'Неверный токен' }] })

    const existingToken: TokenModelType | null = await TokenModel.findOne({ id: isTokenValid.id })
    if (!existingToken) return res.status(400).json({ errors: [{ param: 'origin', msg: 'Токена нет в базе' }] })

    res.status(200).json({ data: { role: isTokenValid.role, login: isTokenValid.login, id: isTokenValid.id } })
  },
  async delete(req: ExtendedRequestType<AuthData>, res: NextApiResponse<UniversalResponseAPIType<{}>>) {
    const token = req.cookies.token
    if (!token) return res.status(400).json({ errors: [{ param: 'origin', msg: 'Токена нет' }] })

    const isTokenValid = jwt.verify(token, process.env.JWT_SECRET || 'secret') as TokenJWTPayload
    if (!isTokenValid) return res.status(400).json({ errors: [{ param: 'origin', msg: 'Неверный токен' }] })

    const existingToken: TokenModelType | null = await TokenModel.findOne({ id: isTokenValid.id })
    if (!existingToken) return res.status(400).json({ errors: [{ param: 'origin', msg: 'Токена нет в базе' }] })
    
    await TokenModel.deleteOne({ existingToken })

    res.status(200).json({})
  }
}