import { Trash } from "phosphor-react";
import { useState } from "react";
import { Modal } from "../../components/PI012-Modal";
import { Container } from "./styles";

export function PaginaVendedor() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <Container>
      <button onClick={() => setModalOpen(true)}><Trash size={20} /></button>
      {modalOpen &&
        <Modal onHandleClose={() => setModalOpen(false)}>
          <h2>Deseja exluir o produto headset?</h2>
        </Modal>
      }
    </Container>
  )
}