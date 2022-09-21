import styled from "styled-components";

export const CartContainer = styled.div`
    background-color: ${props => props.theme["gray-100"]};
    border-radius: 0 40px 0 40px;
    height: fit-content;
    padding: 0 40px 40px;
    .total-container{
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 3px;
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
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.theme["purple-900"]};
        height: fit-content;
        padding: 1rem 0;
        border-radius: 0 10% 0 10%;
        color: ${props=>props.theme.white};
        margin-top: 15px;
        cursor: pointer;
    }
`