import styled from "styled-components";

export const Container = styled.div`
  max-width: 75rem;
  max-height: 100vh;
  padding: 0 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5rem auto;

  img {
    height: 32.18rem;
    width: 25rem;
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme["gray-900"]};
  }
  @media screen and (max-width: 425px) {
    max-width: 70rem;
    max-height: 100vh;
    padding: 0 1%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 1.5rem auto;

    img {
      height: 25rem;
      width: 20rem;
      margin-right: 50px;
    }

    span {
      font-size: 1.25rem;
      font-weight: bold;
      color: ${(props) => props.theme["gray-900"]};
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;

  label {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  input {
    width: 22rem;
    height: 3rem;
    border: none;
    background-color: ${(props) => props.theme["gray-200"]};
    font-size: 1rem;

    border-radius: 8px;
    padding: 1rem;
    box-shadow: 1px 1px 2px 2px ${(props) => props.theme["purple-500"]};

    &:focus {
      box-shadow: 0 0 0 2px ${(props) => props.theme["green"]};
    }
  }

  button {
    width: 200px;
    background-color: ${(props) => props.theme["purple-500"]};
    border: none;
    font-size: 1.5rem;
    color: ${(props) => props.theme["white-100"]};

    border-radius: 8px;
    padding: 1rem;
    cursor: pointer;
    box-shadow: 1px 1px 2px 2px ${(props) => props.theme["gray-500"]};

    &:hover {
      background-color: ${(props) => props.theme.green};
      box-shadow: 1px 1px 2px 2px ${(props) => props.theme["gray-300"]};
      transition: all 0.2s;
    }
  }
  a {
    margin-left: 5px;
    text-decoration: none;
    margin-right: 50px;

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 425px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    label {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    input {
      width: 18rem;
      height: 2rem;
      border: none;
      background-color: ${(props) => props.theme["gray-200"]};
      font-size: 1rem;

      border-radius: 8px;
      padding: 0.8rem;
      box-shadow: 1px 1px 2px 2px ${(props) => props.theme["purple-500"]};

      &:focus {
        box-shadow: 0 0 0 2px ${(props) => props.theme["green"]};
      }
    }

    p {
      margin-left: 2.5rem;
    }
    a {
      margin-left: 5px;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    button {
      width: 150px;
      background-color: ${(props) => props.theme["purple-500"]};
      border: none;
      font-size: 1.5rem;
      color: ${(props) => props.theme["white-100"]};

      border-radius: 8px;
      padding: 1rem;
      cursor: pointer;
      box-shadow: 1px 1px 2px 2px ${(props) => props.theme["gray-500"]};

      &:hover {
        background-color: ${(props) => props.theme.green};
        box-shadow: 1px 1px 2px 2px ${(props) => props.theme["gray-300"]};
        transition: all 0.2s;
      }
    }
  }
`;
