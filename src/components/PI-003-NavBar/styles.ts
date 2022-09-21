import styled from 'styled-components'
import fundo from './fundo.svg'

export const ContainerPrincipal = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 25vh;
    background-image: url(${fundo});
    background-size: cover;
`

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    width: 80vw;
    margin: 1rem auto;
    
    .Logo {
        width: 8rem;
        background-color: #fff;
        border-radius: 25px;
        padding: 0.5rem;
        cursor: pointer;
    }

    .localizacao{
        display: flex;
        align-items: center;
        gap: 1rem;

        .cidade{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 4px;

            height: 38px;
            width: 143px;
            background-color: ${props => props.theme['purple-100']};
            color: ${props => props.theme['purple-900']};
            padding: 0.2rem;
            border-radius: 5%;

            img{
                width: 15.13px;
            }
        }
        
        span {
            margin-left:0.2rem;
        }
    }

`
