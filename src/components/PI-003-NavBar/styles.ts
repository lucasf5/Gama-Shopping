import styled from 'styled-components'

export const Container = styled.header`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 6rem;
    background-color: aliceblue;
    position: absolute;
    height: 5rem;
    width: 100%;
    

    img{
        height: 3.5rem;
        width: 3.5rem;
    }

    .localizacao{
        display: flex;
        position: inline;
        align-items: center;

        .cidade{
            margin: 0 0.5rem;
            background-color: #cccccc;
            padding: 0.2rem;
            border-radius: 5%;
            
        }

            span {
                margin-left:0.2rem;
            }
    }

`




// .logogama {
//     height: 150px;
//     width: 120px;
// }

// .localizacao {
//     height: 50px;
//     width: 120px;
// }