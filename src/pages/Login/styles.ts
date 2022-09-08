import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  margin-right: 100px;

  img {
    height: 515px;
    width: 400px;
  }

  span {
    font-size: 3rem;
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 200px;
  gap: 20px;

  input {
    width: 410px;
    height: 40px;
    border: none;
    background-color: #d9d9d9;
    font-size: 1.5rem;
  }

  button {
    width: 200px;
    height: 60px;
    background-color: #d9d9d9;
    border: none;
    font-size: 1.5rem;
  }
  a {
    margin-left: 5px;
    text-decoration: none;
  }
`;
