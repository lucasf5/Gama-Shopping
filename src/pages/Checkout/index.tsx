import { Container } from "./styles";
import PayMethod from "../../components/PI008-PayMethod/index";
import AdressForm from "../../components/PI008-AdressForm";
import BuyingCart from "../../components/PI008-BuyingCart";

export function Checkout() {
  return (
    <Container>
      <main>
        <div className="client-data">
          <AdressForm />
          <PayMethod />
        </div>
        <BuyingCart />
      </main>
    </Container>
  )
}