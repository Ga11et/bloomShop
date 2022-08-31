import { NextApiRequest, NextApiResponse } from 'next';
export interface ExtendedRequestType<B> extends NextApiRequest {
  body: B
}

export type PostModelType = {
  title: string
  description: string
  _id: string
}
export type AdminModelType = {
  login: string
  password: string
  _id: string
}
export type TokenModelType = {
  token: string
  id: string
  _id: string
}