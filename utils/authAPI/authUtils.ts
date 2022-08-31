import { NextApiResponse } from 'next'
import { AdminModelType, ExtendedRequestType, TokenModelType } from '../../app/types/apiTypes'
import { AuthData } from '../../app/types/clientApiTypes'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import TokenModel from '../models/token'
import AdminModel from '../models/admin'

export const authAPIUtils = {
  async post(req: ExtendedRequestType<AuthData>, res: NextApiResponse) {
    const user: AdminModelType | null = await AdminModel.findOne({ login: req.body.login })
    if (!user) return res.status(400).json('Такого пользователя не существует')

    const isPassValid = bcrypt.compareSync(req.body.password, user.password)
    if (!isPassValid) return res.status(400).json('Пароль неверный')

    const token = jwt.sign({ login: user.login, id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: 1000*60*60*24 })

    const existingToken = await TokenModel.findOne({ token: token })
    if (existingToken) await TokenModel.deleteOne({ existingToken })
    await TokenModel.create({ id: user._id, token: token })

    res.setHeader("set-cookie", `token=${token}; samesite=lax; httponly;`)
    res.status(200).json('ok')
  },
  async get(req: ExtendedRequestType<AuthData>, res: NextApiResponse) {
    const token = req.cookies.token

    if (!token) return res.status(400).json('Токена нет')

    const isTokenValid = jwt.verify(token, process.env.JWT_SECRET || 'secret') as { id: string }
    if (!isTokenValid) return res.status(400).json('Токен не верный')

    const existingToken: TokenModelType | null = await TokenModel.findOne({ id: isTokenValid.id })
    if (!existingToken) return res.status(400).json('Токена нет в базе')

    res.status(200).json('ok')
  },
  async delete(req: ExtendedRequestType<AuthData>, res: NextApiResponse) {
    const token = req.cookies.token
    if (!token) return res.status(400).json('Токена нет')

    const isTokenValid = jwt.verify(token, process.env.JWT_SECRET || 'secret') as { id: string }
    if (!isTokenValid) return res.status(400).json('Токен не верный')

    const existingToken: TokenModelType | null = await TokenModel.findOne({ id: isTokenValid.id })
    if (!existingToken) return res.status(400).json('Токена нет в базе')
    
    await TokenModel.deleteOne({ existingToken })

    res.status(200).json('ok')
  }
}