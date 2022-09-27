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
// Profile API Interfaces
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
// Product API Interfaces
export interface IPostProductType {
  name: string
  description: string
  price: number
  image: string
  amount: number
}
export interface IUpdateProduct {
  name: string
  description: string
  price: number
  amount: number
  id: string
}
// Review API Interfaces
export interface IPostReview {
  productId: string
  productName: string
  positive: string
  negative: string
  comment: string
  rating: number
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

// Product Client Interfaces
export interface IReviewsCounts {
  one: number
  two: number
  three: number
  four: number
  five: number
  all: number
}
export interface IPostReviewHelperItem {
  title: string
  success: boolean
}
export interface IPostReviewFormData {
  positive: string
  negative: string
  comment: string
  rating: number
}