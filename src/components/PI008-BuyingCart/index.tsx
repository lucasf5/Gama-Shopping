import { CartContainer } from "./style";
import BuyingItem from "../PI008-BuyingItens/intex";
import { useCart } from "../../contexts/useCart";
import { formatPrice } from "../../util/format";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const BuyingCart = () => {
  const { cart, formsEnvio, setCart } = useCart();
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const actionButton = formsEnvio.cep === ''
    setIsDisabled(actionButton)
  }, [formsEnvio])

  const navigate = useNavigate();

  const total = formatPrice(
    cart.reduce((sumTotal, product) => {
      return sumTotal + product.amount * product.price + 3.5;
    }, 0)
  );

  const cartFormatted = cart.map((product) => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subTotal: formatPrice(product.price * product.amount),
  }))


  return (
    <CartContainer>
      {cart.length > 0 ? (
        cart.map((item) => {
          return <BuyingItem product={item} />;
        })
      ) : (
        <div className="empty-cart">Carrinho vazio</div>
      )}
      <div className="total-container">
        <div className="itens-total">
          <p>Total de Itens</p>
          <p>
            {cartFormatted.reduce((acc, product) => {
              return acc + product.amount;
            }, 0)}
          </p>
        </div>
        <div className="frete-price">
          <p>Entrega</p>
          <p>R$ 3,50</p>
        </div>
        <div className="total">
          <h3>Total</h3>
          <h3>{total}</h3>
        </div>
        <button disabled={isDisabled} className="confirm-button" onClick={
          () => {
            setCart([])
            navigate("/sucesso")
          }
        }>Confirmar Pedido</button>
      </div>
    </CartContainer>
  );
};

export default BuyingCart;
