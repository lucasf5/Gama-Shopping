import styled from "styled-components";

export const CartContainer = styled.div`
      background-color: ${(props) => props.theme["white"]};
  box-shadow: inset -2px -2px 2px ${(props) =>
        props.theme["purple-500"]}, inset 2px 2px 2px #cbced1;
    border-radius: 0 40px 0 40px;
    height: fit-content;
    padding: 0 40px 40px;
    .total-container{
        display: flex;
        flex-direction: column;
        margin-top: 20px;
    }

    .itens-total,
    .frete-price,
    .total{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .itens-total p{
        width: fit-content;
    }

    .confirm-button{
        border: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.theme["purple-900"]};
        padding: 1rem;
        border-radius: 5px;
        color: ${props => props.theme.white};
        margin-top: 15px;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
            background-color: ${props => props.theme["purple-500"]
    }
    }

        &:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }
    }
`