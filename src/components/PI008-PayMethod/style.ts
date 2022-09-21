import styled from "styled-components";

export const PayMethodContainer = styled.div`
    box-sizing: border-box;
    background-color: ${props => props.theme["gray-200"]};
    max-width: 740px;
    padding: 40px;
    border-radius: 0 50px 0 50px;

    
    .header{
        display: grid;
        grid-template-columns: min-content auto;
    }
    .header .icon{
        color: ${props => props.theme["purple-500"]};
    }
    .payOptionsContainer{
        display:flex;
        align-items:center;
        justify-content:space-around;
        margin-top: 30px;
        gap: 5px;
    }
    .button{
        display:flex;
        align-items: center;
        width: 100%;
        height: 50px;
        border-radius: 5px;
        background-color: ${props => props.theme["gray-300"]};
    }
    @media (max-width: 860px) {
        .payOptionsContainer{
            display: grid;
            grid-template-columns: 100%;
        }
    }
    .button:hover{
        cursor: pointer;
    }
    .button .icon{
        margin: 0 10px;
    }
    .select{
        background-color: ${props => props.theme["purple-900"]};
        color:  ${props => props.theme["white"]};
    }
`