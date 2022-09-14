import styled from 'styled-components'

export const TitleContainer = styled.div`
  max-width: 75rem;
  margin: 6rem auto 0;
  h1 {
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['yellow-900']};
    line-height: 1.3;
    font-weight: 800;
    font-size: 2rem;
  }
  p {
    font-size: 1.25rem;
    line-height: 1.3;
    margin-top: 0.25rem;
  }
`

export const SuccessContainer = styled.main`
  max-width: 74rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6.375rem;
  margin: 2rem auto;
`

export const InfoSuccessContainer = styled.div`
  width: 32.875rem;
  height: 16.875rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border: 1.5px solid ${(props) => props.theme['purple-500']};
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
`

const BaseBox = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  svg {
    padding: 0.5rem;
    border-radius: 50%;
    margin-right: 1rem;
    color: ${(props) => props.theme['white-100']};
  }
`

export const DeliveryContent = styled(BaseBox)`
  svg {
    background: ${(props) => props.theme['purple-900']};
  }
`
export const TimeContent = styled(BaseBox)`
  svg {
    background: ${(props) => props.theme['yellow-500']};
  }
`
export const PaymentContent = styled(BaseBox)`
  svg {
    background: ${(props) => props.theme['yellow-900']};
  }
`


// import styled from 'styled-components'
// import { MapPin } from 'phosphor-react'

// export const Container = styled.main`

//     background:white;
          

//     h1{
//         font-family: 'Baloo 2';
//         font-weight: 800;
//         font-size: 32px;
//         line-height: 130%;
//         color: #C47F17;
//         margin-left: 10rem;
//         margin-top: 3rem;
//     }

//     h2 {
//         font-family: 'Roboto';
//         font-style: normal;
//         font-weight: 400;
//         font-size: 20px;
//         line-height: 130%;
//         color: #403937;
//         font-stretch: 100;
//         margin-left: 10rem;
//     }

//     .content{
//         display: flex;
//         margin-left: 10rem;
//         margin-top: 1rem;
//         align-content: center;
//         gap: 2rem;
        

//         .purchase{
//             margin: auto 3rem auto 0;
//             padding: 3rem;
//             border: 1px solid #8047F8;
//             border-radius: 6px 36px;
//             padding: 10px;
//             width: 32rem;
//             /* height: 16rem;  */
                  
//         }

//         ul {
//             padding-top: 1.5rem;
//             margin-left: 1rem;
//             list-style: none;
//             display: flex;
//             flex-direction: column;
//             align-items: flex-start;
//             gap: 2rem;
//             }

//                 li {
//                     display:flex;
//                     font-family: 'Roboto';
//                     font-style: normal;
//                     font-weight: 400;
//                     font-size: 16px;
//                     line-height: 130%;
//                     color: #574F4D;  
                    
//                     svg{
//                         padding: 0.5rem;
//                         border-radius: 50%;
//                         margin-right: 1rem;
//                         color: ${props => props.theme['white-100']};
//                         background-color: ${props => props.theme['purple-900']};
//                     }
//                 }

//                     span {
//                         text-indent: 1.3rem;
//                     }

//                     p {
//                         text-indent: 1.3rem;
//                         /* font-weight: bold; */
//                     }
                 

//         img {
//             width: 28rem;
//         }
//     }

// `