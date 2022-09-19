import { Container } from "./styles";
import PayMethod from "../../components/PI008-PayMethod/index";
import AdressForm from "../../components/PI008-AdressForm";
import BuyingCart from "../../components/PI008-BuyingCart";
import BuyingItem from "../../components/PI008-BuyingItens/intex";
import React from "react";

export function Checkout() {
  return (
    <Container>
      <header> Aqui seria o componente header</header>
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