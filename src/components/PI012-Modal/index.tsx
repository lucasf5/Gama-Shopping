import { ReactNode } from "react"
import { Container } from "./styles";

interface ModalProps {
  id?: string;
  children: ReactNode
  onHandleClose: () => void
}

export function Modal({ id = 'modal', children, onHandleClose }: ModalProps) {

  function handleOutsideClick(event: any) {
    if (event.target?.id === id) {
      onHandleClose()
    }
  }

  return (
    <Container>
      <div id={id} className="modal-container" onClick={handleOutsideClick}>
        <div className="modal-content">
          {children}
          <div>
            <button>Excluir</button>
            <button onClick={onHandleClose}>Cancelar</button>
          </div>
        </div>
      </div>
    </Container>
  )
}