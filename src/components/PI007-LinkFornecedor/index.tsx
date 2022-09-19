import { useState, useEffect } from "react";
import { ShoppingCart, Timer, Package, Coffee, List, X } from "phosphor-react";
import logo from "../../assets/logo.svg";
import {
  Container,
  AdContainer,
  Stores,
  CardsContainer,
  Options,
  ContainerProducts,
} from "./styles";
import { formatPrice } from "../../util/format";
import { api } from "../../services/api";
import { IProduct } from "../../types";

import { Navigation } from "../PI-003-NavBar";
import { Cards } from "../PI006-Card";

import classNames from "classnames";

interface ProductFormatted extends IProduct {
  priceFormatted: string;
}

const LinkFornecedor = () => {
  const [products, setProducts] = useState<ProductFormatted[]>([]);
  const [seeMore, setSeeMore] = useState(false);
  const [stores, setStores] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<IProduct[]>("products");

      const data = response.data.map((product: IProduct) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    async function loadStores() {
      const response = await api.get("/accounts");

      setStores(response.data);

    }

    loadProducts();
    loadStores();
  }, []);

  return (
    <Container>
      <Navigation />
      <AdContainer>
        <section>
          <h1>Encontre os melhores produtos perto de você.</h1>
          <p className="phrase">
            Com o Gama Shopping você recebe produtos onde estiver, a qualquer
            hora.
          </p>
          <div className="items_container">
            <div className="items">
              <span className="icon cart_icon">
                <ShoppingCart size={24} />
              </span>
              <p>Compras simples e segura</p>
            </div>
            <div className="items">
              <span className="icon package_icon">
                <Package size={24} />
              </span>
              <p>Embalagem mantém o produto intacto</p>
            </div>
            <div className="items">
              <span className="icon timer_icon">
                <Timer size={24} />
              </span>
              <p>Entrega rápida e rastreada</p>
            </div>
            <div className="items">
              <span className="icon coffee_icon">
                <Coffee size={24} />
              </span>
              <p>O produto chega intacto até você</p>
            </div>
          </div>
        </section>
        <aside>
          <img src={logo} alt="" />
        </aside>
      </AdContainer>
      {!seeMore ? (
        <List size={32} onClick={() => setSeeMore(!seeMore)} className="List" />
      ) : (
        <X size={32} onClick={() => setSeeMore(!seeMore)} className="List" />
      )}
      <Stores>
        {stores.map((store) => (
          <span>{store.name}</span>
        ))}
      </Stores>
      <ContainerProducts>
        <Options
          className={classNames({
            seeMore: seeMore,
          })}
        >
          <aside>
            <div className="options">
              <span>
                <Package size={24} />
                Opções
              </span>
              <div className="input_options">
                <div>
                  <input type="radio" className="radio_style" name=""/>
                  <label>Headsets</label>
                </div>
              </div>
            </div>
          </aside>
        </Options>
        <CardsContainer>
          <Cards />
        </CardsContainer>
      </ContainerProducts>
    </Container>
  );
};

export default LinkFornecedor;
