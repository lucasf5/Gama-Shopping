import styled from 'styled-components'


export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 75rem;
  margin: 2rem auto;
  font-size: 0.875rem;
  font-family: 'Baloo 2', sans-serif;
  @media (max-width: 768px) {
    display: none;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  justify-content: space-between;
  margin: 2rem auto;
  max-width: 74rem;
  padding: 0 2%;

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const RegistrationContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  min-width: 28rem;
  min-height: 31.125rem;
  align-items: flex-start;
  justify-content: space-around;
  margin: 0 auto;
  border-radius: 4px;
  background: ${(props) => props.theme['gray-100']};
  padding: 0 2%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  padding: 1rem;
  background: ${(props) => props.theme['gray-100']};
`

export const ProductContainer = styled(BaseContainer)`
  min-width: 28rem;
  min-height: 34rem;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 25rem;
    height: 30rem;
    margin: 1rem auto;

    img {
      width: 8rem;
    }

    h1 {
      text-align: center;
    }
    
    span {
      width: 5rem;
      text-align: center;
      border-radius: 100px;
      padding: 0.4rem 0.5rem;

      font-weight: bold;
      font-size: 0.875rem;
      text-transform: uppercase;

      color: ${props => props.theme['yellow-900']};
      background: ${(props) => props.theme['yellow-100']};
    }

    p{
      text-align: center;
      color: ${props => props.theme['gray-500']}
    }
    
    h3{
      font-size: 1.25rem;
    }

    h4 {
      width: 10rem;
      background-color: ${props => props.theme['gray-300']};
      padding: 0.5rem;
      border-radius: 10px;
      text-align: center;
      font-weight: normal;
    }
  }

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`

export const CheckButton = styled.button`
  width: 23rem;
  height: 2.875rem;
  margin: 1.5rem 1rem;
  background: ${(props) => props.theme['yellow-500']};
  color: ${(props) => props.theme['white-100']};
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: bold;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${(props) => props.theme['yellow-900']};
  }
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-500']};
  }
`
export const PaymentContainer = styled(BaseContainer)`
  svg {
    color: ${(props) => props.theme['purple-900']};
  }
`