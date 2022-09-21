import { ItemContainer } from "./style";
import { Trash, Plus, Minus } from "phosphor-react";
import { useCart } from "../../contexts/useCart";
import { formatPrice } from "../../util/format";

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

  function handleRemoveProduct(productId: number) {
    removeProduct(productId);
  }

  function handleProductIncrement({ product }: IProduct) {
    updateProductAmount({ productId: product.id, amount: product.amount + 1 });
  }

  function handleProductDecrement({ product }: IProduct) {
    updateProductAmount({ productId: product.id, amount: product.amount - 1 });
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
