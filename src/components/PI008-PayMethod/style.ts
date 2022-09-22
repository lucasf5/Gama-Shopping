import styled from "styled-components";

export const PayMethodContainer = styled.div`
  box-sizing: border-box;
  background-color: ${(props) => props.theme["white"]};
  box-shadow: inset -2px -2px 2px ${(props) =>
    props.theme["purple-500"]}, inset 2px 2px 2px #cbced1;
  max-width: 740px;
  padding: 40px;
  border-radius: 0 40px 0 40px;

  .content {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;

    img {
      width: 10rem;
      :last-child {
        margin-left: 5rem;
      }
    }
    .inputs {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      label {
        display: flex;
        flex-direction: column;
        input {
          height: 40px;
          padding: 10px;
          background-color: ${(props) => props.theme["gray-300"]};
          border: none;
          border-radius: 5px;
        }
      }

      .expDate {
        display: flex;
        gap: 0.2rem;
        input {
          width: 100%;
        }
      }
    }
    @media (max-width: 768px) {
        .imgs {
            display: none;
        }
      }
  }

  .header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .header .icon {
    color: ${(props) => props.theme["purple-500"]};
  }
  .payOptionsContainer {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 30px;
    gap: 5px;
  }
  .button {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    background-color: ${(props) => props.theme["gray-300"]};
  }
  @media (max-width: 860px) {
    .payOptionsContainer {
      display: grid;
      grid-template-columns: 100%;
    }
  }
  .button:hover {
    cursor: pointer;
  }
  .button .icon {
    margin: 0 10px;
  }
  .select {
    background-color: ${(props) => props.theme["purple-900"]};
    color: ${(props) => props.theme["white"]};
  }
`;
