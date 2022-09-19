import styled from "styled-components";

export const ItemContainer = styled.div`
    display: grid;
    grid-template-columns: 64px auto;
    grid-column-gap: 12px;
    background-color: ${props => props.theme["gray-100"]};
    padding: 30px 0;
    border-bottom: 1px solid ${props => props.theme["gray-400"]};
    
    @media (max-width: 360px) {
        display: grid;
        grid-template-columns: 100%;
        justify-content: center;
        .img-container{
            display: flex;
            justify-content: center;
        }
    }
    .img{
        background-color: pink;
        text-align: center;
        height:64px;
    }
    .prod-data{
        display:grid;
        grid-template-rows: 30px 30px;
        grid-gap: 2px;
    }
    .names{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .buttons-container{
        display: grid;
        grid-template-columns: 60px 90px;
        grid-column-gap: 8px;
    }
    
    @media (max-width: 360px) {
        .buttons-container{
            display:flex;
            justify-content: center;
        }
    }
    .button{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background-color: ${props => props.theme["gray-300"]};
        border-radius: 5px;
        height: 2rem;
    }
    .button .icon{
        color: ${props => props.theme["purple-500"]};
    }
    .quantity .icon,
    .delete{
        cursor: pointer;
    }
    .item-price{
        text-align: right;
    }
    .button .icon:active{
        color: ${props => props.theme["yellow-100"]};
    }
`