import { ItemContainer } from "./style";
import { Trash } from "phosphor-react";
import { useCart } from "../../contexts/useCart";
import { formatPrice } from "../../util/format";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {   } from "react-router-dom";

export interface IProduct {
  product: {
    id: number;
    title: string;
    price: number;
    amount: number;
    pictures: [
      {
        id: string;
        url: string;
      }
    ];
  };
}

const BuyingItem = ({ product }: any) => {
  const { addProduct, removeProduct, cart, updateProductAmount } = useCart();

  const navigate = useNavigate();

  function handleRemoveProduct(productId: number) {
    removeProduct(productId);
    if (cart.length === 0) {
      navigate("/");
    }
  }

  function handleProductIncrement({ product }: IProduct) {
    updateProductAmount({ productId: product.id, amount: product.amount + 1 });
  }

  function handleProductDecrement({ product }: IProduct) {
    updateProductAmount({ productId: product.id, amount: product.amount - 1 });
    if (product.amount === 1) {
      removeProduct(product.id);
    }
  }

  return (
      <ItemContainer>
        <div className="container">
          <div className="img-container">
            <img src={product.pictures[0].url} alt="" />
          </div>
          <div className="prod-data">
            <div className="names">
              <div className="item-name">{product.title}</div>
            </div>
          </div>
        </div>
        <article>
          <p>{formatPrice(product.price)}</p>
          <div className="buttonPrice">
            <button
              className="buttonPrice__unity"
              onClick={() => handleProductDecrement({ product })}
            >
              -
            </button>
            <p>{product.amount}</p>
            <button
              className="buttonPrice__unity"
              onClick={() => handleProductIncrement({ product })}
            >
              +
            </button>
          </div>
          <button
            className="trash"
            onClick={() => handleRemoveProduct(product.id)}
          >
            <Trash size={25} />
          </button>
        </article>
      </ItemContainer>
  );
};

export default BuyingItem;
