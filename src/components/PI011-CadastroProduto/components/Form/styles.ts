import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  p {
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme['gray-600']};
    b {
      font-weight: normal;
      font-size: 0.875rem;
      line-height: 1.3;
      color: ${(props) => props.theme['gray-500']};
    }
  }
`
const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  padding: 1rem;
  background: ${(props) => props.theme['gray-100']};
`
export const FormContainer = styled(BaseContainer)`
  border-radius: 8px;
  max-width: 40rem;
  svg {
    color: ${(props) => props.theme['yellow-900']};
  }
`

export const FormContent = styled.form`
  div {
    display: flex;

    button {
      border: 0;
      padding: 0.6rem 1rem;
      border-radius: 8px;
      margin: 2rem auto;
      background-color: ${(props) => props.theme["yellow-500"]};
      color: ${(props) => props.theme["gray-900"]};
      cursor: pointer;
      
      &:hover {
        filter: brightness(1.1);
        transition: filter 0.2s;
      }
    }
  }
`

const BaseInput = styled.input`
  background: ${(props) => props.theme['gray-200']};
  color: ${(props) => props.theme['gray-500']};
  border-radius: 4px;
  padding: 12px;
  height: 2.625rem;
  border: 0;
  margin: 1rem 0;
  @media (max-width: 768px) {
    max-width: 13rem;
  }
`

export const InputName = styled(BaseInput)`
  width: 12.5rem;
  margin-top: 2rem;
`

export const TextDescription = styled(BaseInput)`
  width: 35rem;
  @media (max-width: 768px) {
    max-width: 26rem;
  }
`

export const InputType = styled(BaseInput)`
  width: 12.5rem;
  margin-right: 0.5rem;
`

export const InputPrice = styled(BaseInput)`
  width: 21.75rem;
`

export const InputUrlImage = styled(BaseInput)`
  width: 35rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    max-width: 26rem;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 35rem;
  gap: 1.33rem;
  margin: 2rem 0 0;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`



const BaseInputPayment = styled.div`
  width: 11.16rem;
  height: 3.18rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border: 0;
  background: ${(props) => props.theme['gray-300']};
  border-radius: 6px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-900']};
  }
  span {
    margin-left: 0.5rem;
    font-size: 0.875rem;
    z-index: 1;
  }
`

export const InputCredit = styled(BaseInputPayment)`
  position: relative;
  label {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    white-space: nowrap;
  }
  input {
    all: unset;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    &:checked {
      border-radius: 8px;
      border: 1px solid ${(props) => props.theme['purple-900']};
    }
  }
`
export const InputDebit = styled(BaseInputPayment)`
  position: relative;
  label {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    white-space: nowrap;
  }
  input {
    all: unset;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    &:checked {
      border-radius: 8px;
      border: 1px solid ${(props) => props.theme['purple-900']};
    }
  }
`
export const InputMoney = styled(BaseInputPayment)`
  position: relative;
  label {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    white-space: nowrap;
  }
  input {
    all: unset;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    &:checked {
      border-radius: 8px;
      border: 1px solid ${(props) => props.theme['purple-900']};
    }
  }
`
