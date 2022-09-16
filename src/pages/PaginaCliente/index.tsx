import { Cards } from "../../components/PI006-Card";
import LinkFornecedor from "../../components/PI007-LinkFornecedor";
import { Container, OptionsContainer } from "./styles";

export function PaginaCliente() {
  return (
    <Container>
      <LinkFornecedor />
      <OptionsContainer>{/* <Cards /> */}</OptionsContainer>
    </Container>
  );
}
