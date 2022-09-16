import { Package } from "phosphor-react";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 915px) {
    width: 100%;
  }
`;

export const AdContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 55%;
  align-items: center;
  margin-top: 2rem;

  h1 {
    font-size: 3rem;
  }
  .phrase {
    margin-top: 1rem;
  }
  .items_container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
    grid-gap: 1rem;
    margin-top: 2rem;
  }

  .items {
    display: flex;
    align-items: center;
    p {
      margin-left: 0.5rem;
    }
  }

  .cart_icon {
    color: white;
    background-color: #c47f17;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
  .package_icon {
    color: white;
    background-color: #574f4d;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }

  .timer_icon {
    color: white;
    background-color: #dbac2c;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }

  .coffee_icon {
    color: white;
    background-color: #8047f8;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
  @media (max-width: 915px) {
    width: 100%;
    padding: 0 2rem;
    margin-top: 5rem;
    h1 {
      font-size: 1.75rem;
    }
    img {
      display: none;
    }
    .items {
      display: flex;
      align-items: center;
      p {
        margin-left: 0.2rem;
      }
    }
    .items_container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const Stores = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  position: relative;
  span {
    font-size: 2.5rem;
    font-weight: bold;
  }
  @media (max-width: 915px) {
    width: 100%;
    span {
      font-size: 1.2rem;
    }
  }
`;

export const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  grid-gap: 2rem;
  margin-top: 5rem;
  @media (max-width: 915px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`;
export const Options = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;

  position: absolute;
  width: 15rem;
  height: 15rem;
  left: 8rem;
  top: 35rem;

  background: #f3f2f2;
  border-radius: 6px;

  .options span {
    margin-left: 1rem;
  }
  .input_options {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    margin-top: 2rem;
  }
  .input_options label {
    padding: 1rem;
  }

  .radio_style {
    cursor: pointer;
    appearance: none;
    border-radius: 50%;
    background-color: #f3e2c2;
    border: 1px solid #f3e2c2;
    width: 1rem;
    height: 1rem;
  }
  input[type="radio"]:checked {
    content: "";
    background-color: #8047f8;
    border: 1px solid #8047f8;
  }
  @media (max-width: 915px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 0;
    top: 0;
    margin-top: 2rem;
  }
`;
