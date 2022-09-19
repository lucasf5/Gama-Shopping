import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    width: 90vw;
    margin: 1rem auto;
    
    img {
        width: 4rem;
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
