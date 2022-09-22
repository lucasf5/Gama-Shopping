import styled from "styled-components";
import bgImage from "../../assets/imgs/background.svg";
// import BG2 from "../../assets/imgs/BG2.png";
// import BG3 from "../../assets/imgs/Rectangle.png";
import BG3 from "../../assets/imgs/et.png";
import BG2 from "../../assets/imgs/blackSale.png";

export const ContainerProducts = styled.section`
  width: 80%;
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  margin-top: 2rem;

  @media (max-width: 915px) {
    flex-direction: column;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .List {
    display: none;
  }

  @media (max-width: 915px) {
    width: 100%;

    .List {
      display: flex;
      position: fixed;
      left: 0;
      top: 57%;
      cursor: pointer;
    }
  }
`;

export const Power2 = styled.section`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 26.9rem;
  padding: 1rem 5rem;
  align-items: center;
  background-image: url(${BG2});
  background-repeat: repeat-x;
  background-size: contain;
  background-position: center;
`

export const Power3 = styled.section`
  padding: 1rem 5rem;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 26.9rem;
  align-items: center;
  background-image: url(${BG3});
  background-repeat: repeat;
  background-size: contain;
  background-position: center;
  padding: 1rem 5rem;
`


export const AdContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  background-image: url(${bgImage});
  padding: 1rem 5rem;

  h1 {
    font-size: 3rem;
    max-width: 588px;
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

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;
    border-radius: 50%;
  }

  .cart_icon {
    color: white;
    background-color: #c47f17;
  }
  .package_icon {
    color: white;
    background-color: #574f4d;
  }

  .timer_icon {
    color: white;
    background-color: #dbac2c;
  }

  .coffee_icon {
    color: white;
    background-color: #8047f8;
  }

  @media (max-width: 1000px) {
    width: 100%;
    padding: 2rem;
    justify-content: space-evenly;
    gap: 0;
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

  .OptionsName {
    cursor: pointer;
    &.active {
      color: #c47f17;
    }
    &:hover {
      color: #c47f17;
    }
  }
  @media (max-width: 915px) {
    width: 100%;
    span {
      font-size: 1.2rem;
    }
  }
`;

export const CardsContainer = styled.section`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 915px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`;
export const Options = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1rem;

  width: 15rem;
  height: 100%;
  left: 8rem;
  top: 35rem;

  background-color: ${(props) => props.theme["white"]};
  box-shadow: inset 2px 2px 2px wheat, inset -2px -2px 2px #cbced1;
  border-radius: 6px;

  .options span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: 0.8rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${(props) => props.theme["purple-900"]};
  }
  .input_options {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    margin-top: 2rem;
    margin-left: 1rem;
    &_active {
      color: ${(props) => props.theme["green"]};
      font-weight: bold;
    }
  }
  .input_options label {
    padding: 1rem;
    cursor: pointer;
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
    position: fixed;
    left: -500px;
    height: 100%;

    &.seeMore {
      display: flex;
      align-items: center;
      position: fixed;
      left: 0;
      transition: 0.5s ease-in-out;
      z-index: 999;
    }

    &.seeMore aside {
      overflow: auto;
      height: 600px;
    
    }
  }
`;
