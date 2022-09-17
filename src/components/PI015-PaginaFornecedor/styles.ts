import styled from 'styled-components'
import bgImg from '../../assets/imgs/background.svg'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .banner {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 1rem auto;
    padding: 2rem;
    background-image: url(${bgImg});

   h1 {
    font-family: 'Baloo 2', sans-serif;
   }

    .description {
      max-width: 40rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .icons-wrapper{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-top: 1rem;
    }

    .icons-content {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .img-container{
      img {
        width: 15rem;
        }
        @media (max-width: 915px){
          display: none;
        }
      }
    }
  
  .link-fornecedor{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 3rem;


    h2 {
      font-family: 'Baloo 2', sans-serif;
      text-align: center;
      font-size: 1.5rem;
      color: ${props => props.theme['yellow-900']}
    }

    a {
      text-decoration: none;
      padding: 0.5rem;
      border-radius: 8px;
      font-weight: bold;
      font-size: .875rem;
      color: ${props => props.theme['purple-900']};
      background-color: ${props => props.theme['purple-100']};

      &:hover {
        filter: brightness(0.9);
        transition: filter 0.2s;
      }
    }
  }

`
interface IconsProps {
  variant: 'purple' | 'yellow' | 'gray' | 'green'
}

export const IconsType = styled.div<IconsProps>`

svg {
  color: ${props => props.theme['gray-100']};
  border-radius: 50%;
  box-sizing: content-box;
  padding: 0.5rem;
  background: ${props => props.variant === 'purple'
    ? props.theme['purple-900']
    : props.variant === 'green'
      ? props.theme.green
      : props.variant === 'gray'
        ? props.theme['gray-600']
        : props.theme['yellow-900']
  }
}
`