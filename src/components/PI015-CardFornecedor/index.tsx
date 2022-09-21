import { Pen, Trash } from "phosphor-react";
import { useState } from "react";
import { Modal } from "../PI012-Modal";
import { CardContainer } from "./styles";

export function CardFornecedor() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <CardContainer>
      <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTYiFTq2GNd7YtOStrSA5wvzOpwCH_75PAWXyEL8KunGdPBPR2UhqFGGRTP9btmGYsgJlTNYo8KQVzsOOjkubLK0N-I7zXV5Xe7cccumXs2&usqp=CAE" alt="" />
      <div>
        <span>Tipo</span>
      </div>
      <h1>Nome</h1>
      <p>Descrição</p>

      <div className="price-trash">
        <p>R$00,00</p>
        <button className="remove-item" onClick={() => setModalOpen(true)}><Trash size={20} /></button>
        {modalOpen &&
          <Modal onHandleClose={() => setModalOpen(false)}>
            <h2>Deseja exluir o produto headset?</h2>
          </Modal>
        }
        <button className="edit-item"><Pen size={20} /></button>
      </div>
    </CardContainer>

  )
}