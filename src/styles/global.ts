import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["purple-900"]}
  }
  body {
    background: ${(props) => props.theme["white-100"]}
  }
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  body::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
   
  background-color: ${(props) => props.theme["white"]};        /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme["purple-500"]};    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
}
  .react-modal-overlay{
        background-color: rgba(0,0,0,0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;

    }
    .react-modal-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 100%;
        max-width: 50%;
        background-color: ${(props) => props.theme["white-100"]};
        padding: 3rem;
        position: relative;
        border-radius: 0.5rem;

        input{
            text-align: center;
            border-radius: 0.25rem;
            border: 1px solid ${(props) => props.theme["gray-100"]};
            padding: 0.5rem 1.5rem;
        }

      @media (max-width: 720px) {
        max-width: 80%;
      }
    }
    .react-modal-close{
        border-radius: 5px;
        position: absolute;
        right: 0;
        top: 0;
        height: 40px;
        width: 40px;
        background-color: transparent;
        border: none;
    }
`;
