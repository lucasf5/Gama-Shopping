import styled from 'styled-components';

export const Container = styled.div`
  .modal-container{
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(0,0,0,0.8);

  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 35rem;
    height: 10rem;
    color: black;
    background: ${props => props.theme["yellow-100"]};

    border-radius: 20px;

    .modal-title {
      display: flex;
      align-items: center;
      color: red;
    }


    div {
      display: flex;
      gap: 2rem;
      margin-top: 1rem;

      button {
        border: 0;
        width: 6rem;
        padding: .8rem;
        border-radius: 8px;
        cursor: pointer;
        color: ${(props) => props.theme["gray-100"]};
        line-height: 1rem;

        &:first-of-type{
          background-color: #dc2626;
        }

        &:last-of-type{
          background-color: #16a34a;
        }

        &:hover {
          filter: brightness(1.2);
          transition: filter 0.2s;
        }
      }
    }
    }
}
`
