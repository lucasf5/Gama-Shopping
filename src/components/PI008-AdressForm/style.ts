import styled from "styled-components";

export const AdressContainer = styled.div`
    max-width: 740px;
    background-color: ${props => props.theme["gray-200"]};
    padding: 40px;
    border-radius: 0 50px 0 50px;
    
    .header{
        display: grid;
        grid-template-columns: min-content auto;
    }
    .header .icon{
        color: ${props => props.theme["purple-500"]}
    }
    form{
        display: grid;
        grid-template-columns: 200px auto 60px;
        grid-gap: 16px;
        margin-top: 30px;
    }
    @media (max-width: 900px) {
        form{
            display: block;
        }
        input{
            width: 100%;
            margin-top: 16px;
        }
    }
    #cep{
        grid-column: 1; 
    }
    #rua{
        grid-column: 1 / span 3;
        grid-row: 2
    }
    #numero{
        grid-row: 3;
        grid-column: 1; 
    }
    #complemento{
        grid-row: 3;
        grid-column: 2 / span 2; 
    }
    #bairro{
        grid-row: 4;
        grid-column: 1; 
    }
    #cidade{
        grid-row: 4;
        grid-column: 2; 
    }
    #uf{
        grid-row: 4;
        grid-column: 3; 
    }
    input{
        height: 40px;
        padding: 10px;
        background-color: ${props => props.theme["gray-300"]};
        border: none;
        border-radius: 5px;
    }
    input:focus{
        outline: 2px solid ${props => props.theme["purple-500"]};
    }
`