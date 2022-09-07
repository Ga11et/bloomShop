import { NextApiRequest } from 'next';
import { userRole } from '../../utils/models/admin';
import { filteredResponse } from './clientApiTypes';
export interface ExtendedRequestType<B> extends NextApiRequest {
  body: B
}

export type PostModelType = {
  title: string
  description: string
  _id: string
}
export type AdminModelType = {
  role: userRole
  login: string
  password: string
  _id: string
}
export type TokenModelType = {
  token: string
  id: string
  _id: string
}
export type ProductModelType = {
  _id: string
  name: string
  price: string
  image: string
  description: string
}
export type TokenJWTPayload = {
  id: string
  login: string
  role: userRole
}
export type AuthUserData = {
  id: string
  login: string
  role: userRole
}
export type postAPIResponse = filteredResponse<PostModelType[]> | 'not ok'
export type authAPIResponse = filteredResponse<AuthUserData> | 'not ok'