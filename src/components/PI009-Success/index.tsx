import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
// import { useCart } from '../../hooks/useCart'
import deliveryImg from '../../assets/carrinho.svg'

import {
  DeliveryContent,
  InfoSuccessContainer,
  PaymentContent,
  SuccessContainer,
  TimeContent,
  TitleContainer,
} from './styles'

export function Success() {
//   const { activeAdress } = useCart()

  return (
    <>
      <TitleContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </TitleContainer>
      <SuccessContainer>
        <InfoSuccessContainer>
          <DeliveryContent>
            <MapPin size={32} />
            <p>
              Entrega em{' '}
              <strong>
                Rua João Daniel Martinelli, 102
                <br/>
              </strong>
                Farrapos - Porto Alegre - RS
               
              
            </p>
          </DeliveryContent>

          <TimeContent>
            <Timer size={32} />
            <p>
              Previsão de entrega <br />
              <b>20 min - 30 min</b>
            </p>
          </TimeContent>

          <PaymentContent>
            <CurrencyDollar size={32} />
            <p>
              Pagamento na entrega <br />
              <b>Cartão de crédito</b>
            </p>
          </PaymentContent>
        </InfoSuccessContainer>
        <img src={deliveryImg} alt="" />
      </SuccessContainer>
    </>
  )
}



// import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
// import { Container } from './styles'
// import carrinho from '../../assets/carrinho.svg'


// export function Success() {
//     return (
//         <Container>
//             <h1>Uhu! Pedido Confirmado</h1>
//             <h2>Agora é só aguardar que logo seu produto chegará até você.</h2>
            
//             <div className='content'>

//                 <div className='purchase'>
//                     <ul>
//                         <li> <MapPin size={32}/>  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                        
//                             <p>Farrapos - Porto Alegre - RS</p> 
                        
//                         </li>

//                         <li> <Timer size={32}/>  Previsão de entrega 
//                             <br />
//                             <p><strong>20 min - 30 min</strong> </p> 
//                         </li>

//                         <li> <CurrencyDollar size={32}/>  Método de pagto
//                             <br />
//                             <p><strong>Cartão de crédito</strong></p>
//                         </li>

//                     </ul>
//                 </div>

//                 <img src={carrinho}/>

//             </div>
                                              
//         </Container>
//     )

// }




