import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
// import { useCart } from '../../hooks/useCart'
import deliveryImg from '../../assets/carrinho.svg'
import { useCart } from '../../contexts/useCart'

import {
  DeliveryContent,
  InfoSuccessContainer,
  PaymentContent,
  SuccessContainer,
  TimeContent,
  TitleContainer,
  SuccessContainerPrincipal
} from './styles'

export function Success() {
  const { formsEnvio, pagamento } = useCart()

  return (
    <SuccessContainerPrincipal>
      <TitleContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o seu produto chegará até você!</p>
      </TitleContainer>
      <SuccessContainer>
        <InfoSuccessContainer>
          <DeliveryContent>
            <MapPin size={32} />
            <p>
              Entrega em{' '}
              <span>
                {formsEnvio.rua}
                <br/>
              </span>
                {formsEnvio.bairro} - {formsEnvio.cidade} - {formsEnvio.uf}
               
              
            </p>
          </DeliveryContent>

          <TimeContent>
            <Timer size={32} />
            <p>
              Previsão de entrega <br />
              <b>3 a 7 dias</b>
            </p>
          </TimeContent>

          <PaymentContent>
            <CurrencyDollar size={32} />
            <p>
              Pagamento na entrega <br />
              <b>{pagamento}</b>
            </p>
          </PaymentContent>
        </InfoSuccessContainer>
        <img src={deliveryImg} alt="" />
      </SuccessContainer>
    </SuccessContainerPrincipal>
  )
}