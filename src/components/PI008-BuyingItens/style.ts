import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme["white"]};
  border-bottom: 1px solid ${(props) => props.theme["gray-400"]};
  margin-top: 2rem;

  @media (max-width: 360px) {
    display: grid;
    grid-template-columns: 100%;
    justify-content: center;
    .img-container {
      display: flex;
      justify-content: center;
    }
  }
  .prod-data {
    display: flex;
  }
  .container {
    display: flex;
    align-items: center;
    gap: 1rem;
    .img-container img {
      width: 5rem;
    }
    .names {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: start;
      .item-name {
        text-align: start;
        font-weight: 600;
      }
    }
  }
  .buttons-container {
    display: grid;
    grid-template-columns: 60px 90px;
    grid-column-gap: 8px;
  }

  @media (max-width: 360px) {
    .buttons-container {
      display: flex;
      justify-content: center;
    }
  }
  .button {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${(props) => props.theme["gray-300"]};
    border-radius: 5px;
    height: 2rem;
  }
  .button .icon {
    color: ${(props) => props.theme["purple-500"]};
  }
  .quantity .icon,
  .delete {
    cursor: pointer;
  }
  .item-price {
    text-align: right;
  }
  .button .icon:active {
    color: ${(props) => props.theme["yellow-100"]};
  }

  article {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    gap: 1rem;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 1rem;

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
      background-color: ${(props) => props.theme["white"]};
      border: 1px solid ${(props) => props.theme["purple-500"]};
      border-radius: 10px;
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

  .trash {
    background-color: transparent;
    border: 0;
    line-height: 0;
    color: #ef4444;
    cursor: pointer;

    &:hover {
      background-color: transparent;
      color: #b91c1c;
    }
  }
`;
