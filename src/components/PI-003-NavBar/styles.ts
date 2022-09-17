import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 6rem;
    height: 5rem;
    width: 90vw;
    margin: 1rem auto;
    
    img {
        width: 4rem;
    }

    .localizacao{
        display: flex;
        gap: 1rem;
        align-items: center;
        color: ${(props) => props.theme['yellow-900']};

        .cidade{
            display: flex;
            align-items: center;
            margin: 0 0.5rem;
            background-color: ${props => props.theme['yellow-100']};
            padding: .5rem;
            border-radius: 8px;  

            svg {
                margin-right: 0.5rem;
            }
        }



           
    }

`
