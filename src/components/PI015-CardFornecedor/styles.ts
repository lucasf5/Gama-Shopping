import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 16rem;
  height: 20rem;
  background: ${(props) => props.theme['gray-100']};
  margin: 2rem auto;
  padding: 0.8rem;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    margin-top: -5rem;
    max-width: 10rem;
  }
  div {
    margin-top: 1rem;

    span {
      background: ${(props) => props.theme['yellow-100']};
      color: ${(props) => props.theme['yellow-900']};
      border-radius: 100px;
      font-size: 0.625rem;
      font-weight: bold;
      line-height: 1.3;
      padding: 4px 8px;
      margin-top: 0.8rem;
      text-transform: uppercase;
  }
  }
  h1 {
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.3;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['gray-900']};
    margin-top: 1.25rem;
  }
  p {
    max-width: 13.5rem;
    color: ${(props) => props.theme['gray-400']};
    text-align: center;
    font-size: 0.875rem;
    line-height: 1.3;
    margin-top: 0.5rem;
  }

  .price-trash {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    gap: 1rem;
    p:nth-of-type(1) {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.2rem;
      font-weight: 800;
      line-height: 1.3;
      color: ${(props) => props.theme['gray-500']};
    }
    .remove-item {
    border: 0;
    background-color: transparent;
    color: #dc2626;
    cursor: pointer;
    line-height: 0;
  
    &:hover {
      filter: brightness(1.2);
      transition: filter 0.2s;
    }
  }

  .edit-item {
    border: 0;
    background-color: transparent;
    color: ${props => props.theme.green};
    cursor: pointer;
    line-height: 0;
  
    &:hover {
      filter: brightness(1.2);
      transition: filter 0.2s;
    }
  }
  }
`