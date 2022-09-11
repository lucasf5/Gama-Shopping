import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;

  button {
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

`