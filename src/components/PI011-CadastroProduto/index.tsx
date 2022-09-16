import { useState } from 'react'
import { Form } from './components/Form'
import {
  RegistrationContainer,
  TitleContainer,
  Container,
  ProductContainer,
} from './styles'


export function ProductRegistration() {
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    payment: '',
    urlImage: '',
    type: '',
  })


  return (
    <>
      <TitleContainer>
        <h2>Cadastre seu produto</h2>
      </TitleContainer>

      <Container>

        <RegistrationContainer>
          <Form data={data} setData={setData} />
        </RegistrationContainer>

        <ProductContainer>
          <div>
            {data.urlImage ?
              (<img src={data.urlImage} alt="" />) :
              (<img src="https://www.lojaorionsaudenatural.com.br/arquivos/produto_sem_foto.gif" alt="" />)}
            <h1>{data.name ? data.name : "nome do produto"}</h1>
            <span>{data.type ? data.type : "tipo"}</span>
            <p>{data.description ? data.description : "Descrição do produto"}</p>
            <h3>{data.price ? data.price : "R$00,00"}</h3>
            <h4>{data.payment ? data.payment : "Dinheiro"}</h4>
          </div>
        </ProductContainer>
      </Container>
    </>
  )
}