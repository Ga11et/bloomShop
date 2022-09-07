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
export type PostType = {
  id: string
  title: string
  description: string
}
export type ProductType = {
  data: {
    id: string
    name: string
    price: string
    image: string
    description: string
  }
  user: {
    id: string
    login: string
  }
}
export type filteredResponse<P> = {
  status: number
  data: P
}