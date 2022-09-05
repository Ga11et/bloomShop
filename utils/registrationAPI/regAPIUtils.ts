import { NextApiResponse } from 'next';
import { AuthData } from '../../app/types/clientApiTypes';
import { AdminModel } from '../models/admin';
import { ExtendedRequestType } from './../../app/types/serverApiTypes';
import bcrypt from 'bcrypt'

export const regAPIUtils = {
  async get (req: ExtendedRequestType<{}>, res: NextApiResponse) {
    try {
      
    } catch (error) {
      console.log('utils ' + error)
      res.status(400).json('utils ' + error)
    }
  },
  async post (req: ExtendedRequestType<AuthData>, res: NextApiResponse) {
    try {
      const bcryptedPass = bcrypt.hashSync(req.body.password, 7)
      await AdminModel.create({ login: req.body.login, password: bcryptedPass })
      res.status(200).json('ok')
    } catch (error) {
      console.log('utils ' + error)
      res.status(400).json('utils ' + error)
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