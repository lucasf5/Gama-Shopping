export interface IProduct {
  id: number
  name: string
  type?: string
  type2?: string
  description?: string
  price: number
  imgUrl: string
  amount: number
}

export interface IStock {
  id: number
  amount: number
}

export interface IAdress {
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

export interface ICreateAdressData {
  cep: string
  street: string
  city: string
  complement?: string
  number: string
  district: string
  uf: string
  payment: string
}

export interface IUpdateProductAmount {
  productId: number
  amount: number
}

export interface IEventEmailRegister {
  name: string
  value: string
}

export interface IEventEmail {
  email: string
  senha: string
}
export interface IEventEmailCadastro {
  email: string
  senha: string
  confirmarSenha: string
}

export interface ICadastro {
  [x: string]: string
  email: string
  senha: string
  id: string
}

export interface ICadastros {
  [key: string]: ICadastro[]
}