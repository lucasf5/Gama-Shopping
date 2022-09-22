import { Cards } from "../../components/PI006-Card";
import LinkFornecedor from "../../components/PI007-LinkFornecedor";
import { Container, OptionsContainer } from "./styles";
import Modal from "react-modal";
import { X } from "phosphor-react";
import { useCart } from "../../contexts/useCart";
import { ProductRegistration } from "../../components/PI011-CadastroProduto";

export function PaginaCliente() {
  const {isOpen, setIsOpen, setCep} = useCart();
  return (
    <Container>
      <LinkFornecedor />
      <OptionsContainer>{/* <Cards /> */}</OptionsContainer>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="react-modal-close"
        >
          <X />
        </button>
        <p>Digite seu CEP</p>
        <input type="text" name="cep" placeholder="00000000" onChange={(e)=> setCep(e.target.value)}/>
      </Modal>
    </Container>
  );
}
