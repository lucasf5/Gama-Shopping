import { useState, useEffect } from "react";
import { ShoppingCart, Timer, Package, Coffee, List, X } from "phosphor-react";
import logo from "../../assets/logo.svg";
import {
  Container,
  AdContainer,
  CardsContainer,
  Options,
  ContainerProducts,
} from "./styles";

import { Cards } from "../PI006-Card";

import classNames from "classnames";
import { getCategories } from "../../services/apiServices";
import { useCart } from "../../contexts/useCart";
import axios from "axios";

interface Category {
  id: number;
  name: string;
}

const LinkFornecedor = () => {
  const [seeMore, setSeeMore] = useState(false);
  const [nameOfOption, setNameOfOption] = useState("");

  const [categories, setCategories] = useState<Category[]>([]);

  const { setProducts } = useCart();

  const handleChangeOptions = (e: any) => {
    setNameOfOption(e.target.value);
  };

  useEffect(() => {
    async function loadCategories() {
      const response = await getCategories();
      setCategories(response.data);
    }
    loadCategories();
  }, []);

  useEffect(() => {
    async function loadProducts() {
      const response = await axios.get(
        `https://api.mercadolibre.com/sites/MLB/search?category=${nameOfOption}`
      );
      const results = response.data.results;
      setProducts(results);
    }

    loadProducts();
  }, [nameOfOption]);

  return (
    <Container>
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
      <ContainerProducts>
        <Options
          className={classNames({
            seeMore,
          })}
        >
          <aside>
            <div className="options">
              <span>
                <Package size={24} />
                Opções
              </span>
              <div className="input_options">
                {categories ? (
                  categories.map((categorie, index) => (
                    <div key={`${index}+${categorie.name}`}>
                      <input
                        type="radio"
                        id={categorie.id.toString()}
                        name="categoria"
                        className="radio_style"
                        value={categorie.id}
                        checked={nameOfOption === categorie.id.toString()}
                        onChange={handleChangeOptions}
                      />
                      <label htmlFor={categorie.id.toString()}>
                        {categorie.name}
                      </label>
                    </div>
                  ))
                ) : (
                  <p>Carregando...</p>
                )}
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
