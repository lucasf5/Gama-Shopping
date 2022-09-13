import styled, { keyframes } from "styled-components";
import { pulse, rotateInUpRight } from "react-animations";
import backgroung from "../../assets/imgs/Group16.png"

const bounceAnimation = keyframes`${pulse}`;
const rotateAnimation = keyframes`${rotateInUpRight}`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
`;

export const ContainerSection = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  gap: 2rem;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;

  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme["gray-900"]};
  }
  @media (max-width: 915px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    width: 100%;
    height: 100%;
  }
`;

export const AlertContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  animation: 1s ${bounceAnimation};

  .AlertImage {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const Background = styled.div`
  background-image: url(${backgroung});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  animation: 1s ${rotateAnimation};
  @media (max-width: 915px) {
    display: none;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  padding: 2rem;
  gap: 1.25rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  img {
    width: 164px;
    height: 208px;
  }

  h1 {
    font-size: 2rem;
    text-align: start;
  }

  h3 {
    font-size: 1rem;
    color: ${(props) => props.theme["gray-400"]};
    text-align: start;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  input.inputText {
    width: 22rem;
    height: 3rem;
    border: none;
    background-color: ${(props) => props.theme["gray-200"]};
    font-size: 1rem;

    border-radius: 8px;
    padding: 1rem;
    box-shadow: 1px 1px 2px 2px ${(props) => props.theme["purple-500"]};
    transition: all 0.5s ease-in-out;

    &:focus {
      box-shadow: 0 0 0 2px ${(props) => props.theme["green"]};
      transition: all 0.5s ease-in-out;
    }
  }

  .inputCheckbox{
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 22rem;
    height: 3.125rem;
    background-color: ${(props) => props.theme.green};
    border: none;
    font-size: 1.5rem;
    color: ${(props) => props.theme["white-100"]};
    transition: all 0.5s ease;

    border-radius: 8px;
    padding: 1rem;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme["purple-500"]};
      box-shadow: 1px 1px 2px 2px ${(props) => props.theme["gray-300"]};
      transform: scale(1.02);
      transition: all 0.5s ease;
    }
  }
  a {
    margin-left: 5px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 915px) {
    width: 100%;
  }

`;
