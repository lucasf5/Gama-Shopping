import styled from 'styled-components'

export const ButtonContainer = styled.div`
  button {
    background-color: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-900']};
    padding: 0.4rem;
    border: 0;
    border-radius: 4px;
    line-height: 0;
    cursor: pointer;
  }
`