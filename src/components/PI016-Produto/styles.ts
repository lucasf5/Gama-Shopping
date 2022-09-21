import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    margin: 2rem auto;
    width: 60%;
    height: 100%;
    padding: 1.5rem;
    border-radius: 0.5rem;

    background-color: ${props => props.theme['purple-100']};

    @media (max-width: 950px) {
        flex-direction: column;
        width: 80%;
    }
`

export const ContainerImage = styled.div`
        display: flex;
        flex-direction: column;
        max-width: 400px;
        margin-bottom: 20px;
        margin-top: 20px;
        cursor: pointer;
        transition: 0.2s ease-in-out;

        &:hover {
            transform: scale(1.1);
            transition: 0.2s ease-in-out;
        }
        @media (max-width: 950px) {
            width: 100%;
        }
`
export const ContainerProducts = styled.div`
        display: flex;
        align-items: center;
        text-align: center;
        flex-direction: column;
        max-width: 400px;
        gap: 1rem;

    article {
        display: flex;
        align-items: center;
        gap: 1rem;
        width: 100%;
        align-items: center;
        justify-content: space-evenly;
        p:nth-of-type(1) {
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.2rem;
        font-weight: 800;
        line-height: 1.3;
        color: ${(props) => props.theme['gray-500']};
        }
        button {
        transition: background-color 0.2s ease-out;
        background-color: ${(props) => props.theme['purple-500']};
        &:hover {
            background-color: ${(props) => props.theme['purple-900']};
        }
        }
        .buttonPrice {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            background-color: #E6E5E5;
            &__unity {
            color: ${(props) => props.theme['purple-500']};
            background-color: transparent;
            border: 0;
            padding: 0.4rem;
            font-size: 0.875rem;
            cursor: pointer;
            &:hover {
                background-color: ${(props) => props.theme['purple-500']};
                color: #fff;
            }
            }
            &__unity:first-child {
            width: 1.3rem;
            }
        }
    }
`