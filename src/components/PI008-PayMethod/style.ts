import styled from "styled-components";

export const PayMethodContainer = styled.div`
    box-sizing: border-box;
    background-color: ${props => props.theme["gray-200"]};
    max-width: 740px;
    margin: 20px;
    padding: 40px;
    border-radius: 10px;
    
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
    }
    .button{
        display:flex;
        align-items: center;
        width: 200px;
        height: 50px;
        margin-top: 30px;
        border-radius: 5px;
        background-color: ${props => props.theme["gray-300"]};
    }
    .button:hover{
        cursor: pointer;
    }
    .button .icon{
        margin: 0 10px;
    }
    .select-true{
        background-color: ${props => props.theme["purple-900"]};
        color:  ${props => props.theme["white"]};
    }
`