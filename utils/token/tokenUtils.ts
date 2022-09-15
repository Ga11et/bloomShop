import { NextApiResponse } from 'next';
import { TokenJWTPayload, UniversalResponseAPIType } from '../../app/types/serverApiTypes';
import { IToken, TokenModel } from '../models/token';
import jwt from 'jsonwebtoken'

export const TokenUtils = {
  async isTokenValid (token: string): Promise<TokenJWTPayload> {
    return jwt.verify(token, process.env.JWT_SECRET || 'secret') as TokenJWTPayload
  },
  async isTokenExist (token: string): Promise<IToken | null> {
    return await TokenModel.findOne({ token })
  }
}