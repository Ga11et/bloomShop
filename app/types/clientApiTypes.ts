import { ErrorType } from './serverApiTypes'

export type AuthData = {
  login: string
  password: string
}
export type RegData = {
  login: string
  password: string
  firstName: string
  secondName: string
  email: string
}
export interface IPostStatusData {
  userId: string
  newStatus: string
}
export interface IUpdateProfileData {
  firstName: string
  secondName: string
  email: string
  login: string
}
export interface IPostProductType {
  name: string
  description: string
  price: number
  image: string
  amount: number
}

export type PostType = {
  id: string
  title: string
  description: string
}

export type filteredResponse<P> = {
  status: number
  data?: P
  errors?: ErrorType[]
}