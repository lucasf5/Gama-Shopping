import { bounceInUp } from "react-animations";
import styled, { keyframes } from "styled-components";

const bounceAnimation = keyframes`${bounceInUp}`;

export const CardContainer = styled.main`
  animation: 1s ${bounceAnimation} ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  width: 16rem;
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme["white"]};
  box-shadow: inset 2px 2px 2px #cbced1, inset -2px -2px 2px white;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    box-shadow: inset 2px 2px 2px white, inset -2px -2px 2px #cbced1;
    transition: 0.2s ease-in-out;
  }
  img {
    max-width: 10rem;
  }
  span {
    background: ${(props) => props.theme["yellow-100"]};
    color: ${(props) => props.theme["yellow-900"]};
    border-radius: 100px;
    font-size: 0.625rem;
    font-weight: bold;
    line-height: 1.3;
    padding: 4px 8px;
    margin-top: 0.8rem;
    text-transform: uppercase;
  }
  h1 {
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.3;
    font-family: "Baloo 2", sans-serif;
    color: ${(props) => props.theme["gray-900"]};
  }
  p {
    max-width: 13.5rem;
    color: ${(props) => props.theme["gray-400"]};
    text-align: center;
    font-size: 0.875rem;
    line-height: 1.3;
  }
  article {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    gap: 1rem;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    p:nth-of-type(1) {
      font-family: "Baloo 2", sans-serif;
      font-size: 1.2rem;
      font-weight: 800;
      line-height: 1.3;
      color: ${(props) => props.theme["gray-500"]};
    }
    button {
      transition: background-color 0.2s ease-out;
      background-color: ${(props) => props.theme["purple-500"]};
      &:hover {
        background-color: ${(props) => props.theme["purple-900"]};
      }
    }
    .buttonPrice {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background-color: #e6e5e5;
      &__unity {
        color: ${(props) => props.theme["purple-500"]};
        background-color: transparent;
        border: 0;
        padding: 0.4rem;
        font-size: 0.875rem;
        cursor: pointer;
        &:hover {
          background-color: ${(props) => props.theme["purple-500"]};
          color: #fff;
        }
      }
      &__unity:first-child {
        width: 1.3rem;
      }
    }
  }
`;

export const CardCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

export const CardCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  input {
    width: 22rem;
    height: 3rem;
    border: none;
    background-color: ${(props) => props.theme["white"]};
    font-size: 1rem;

    border-radius: 8px;
    padding: 1rem;
    box-shadow: 1px 1px 2px 2px ${(props) => props.theme["purple-500"]};
    transition: all 0.5s ease-in-out;

    &:focus {
      transform: scale(1.05);
      box-shadow: -1px -1px 2px 2px ${(props) => props.theme["purple-900"]};
      transition: all 0.5s ease-in-out;
    }
  }
`;
