export interface Product {
  id: number
  name: string
  type?: string
  type2?: string
  description?: string
  price: number
  imgUrl: string
  amount: number
}

export interface Stock {
  id: number
  amount: number
}

export interface Adress {
  id: string
  cep: string
  street: string
  number: string
  complement?: string
  city: string
  district: string
  uf: string
  payment: string
}

export interface CreateAdressData {
  cep: string
  street: string
  city: string
  complement?: string
  number: string
  district: string
  uf: string
  payment: string
}

export interface UpdateProductAmount {
  productId: number
  amount: number
}