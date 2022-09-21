import styled from "styled-components";

export const Container = styled.div`
    header{
        width: 100%;
        background-color: ${props => props.theme["yellow-100"]};
        font-size: 20px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    main{
        display: grid;
        grid-template-columns: auto auto;
        margin: 20px auto;
        max-width: 1150px;
        grid-gap: 15px;
        padding: 20px
    }
    @media (max-width: 700px) {
        main{
            display: grid;
            grid-template-columns: auto;
        }
    }

    .client-data{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`