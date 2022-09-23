import { Container } from "./styles";
import PayMethod from "../../components/PI008-PayMethod/index";
import AdressForm from "../../components/PI008-AdressForm";
import BuyingCart from "../../components/PI008-BuyingCart";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/useCart";

export function Checkout() {

  const {cart} = useCart();

  const navigate = useNavigate();
  useEffect(() => {
    if (cart.length === 0) {
      navigate("/");
    }
  }, [cart]);
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
  );
}
