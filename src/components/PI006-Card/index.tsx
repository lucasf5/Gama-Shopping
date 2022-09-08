import { formatPrice } from '../../util/format'
import { useCart } from '../../contexts/useCart'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

import { CardContainer } from './styles'
import { ButtonCart } from '../PI006-ButtonCart'
import { IProduct } from '../../types'


interface ProductFormatted extends IProduct {
  priceFormatted: string
}

interface CartItemsAmount {
  [key: number]: number
}

export function Cards() {
  const [products, setProducts] = useState<ProductFormatted[]>([])
  const { addProduct, cart } = useCart()

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<IProduct[]>('products')

      const data = response.data.map((product: IProduct) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }))

      setProducts(data)
    }

    loadProducts()
  }, [])

  function handleAddProduct(id: number) {
    addProduct(id)
  }

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    const newSumAmount = { ...sumAmount }
    newSumAmount[product.id] = product.amount

    return newSumAmount
  }, {} as CartItemsAmount)

  return (
    <>
      {products.map(
        ({
          id,
          imgUrl,
          name,
          description,
          priceFormatted,
          type,
          type2,
        }: ProductFormatted) => {
          if (type2) {
            return (
              <CardContainer key={id}>
                <img src={imgUrl} alt={description} />
                <div>
                  <span>{type}</span>
                  <span>{type2}</span>
                </div>
                <h1>{name}</h1>
                <p>{description}</p>

                <div>
                  <p>{priceFormatted}</p>
                  <ButtonCart onUpdateQuantity={() => handleAddProduct(id)} />
                  <span>{cartItemsAmount[id] || 0}</span>
                </div>
              </CardContainer>
            )
          } else {
            return (
              <CardContainer key={id}>
                <img src={imgUrl} alt="" />
                <div>
                  <span>{type}</span>
                </div>
                <h1>{name}</h1>
                <p>{description}</p>

                <div>
                  <p>{priceFormatted}</p>
                  <ButtonCart onUpdateQuantity={() => handleAddProduct(id)} />
                  <span>{cartItemsAmount[id] || 0}</span>
                </div>
              </CardContainer>
            )
          }
        },
      )}
    </>
  )
}