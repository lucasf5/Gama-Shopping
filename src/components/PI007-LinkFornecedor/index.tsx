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
import { IJson, IProduct } from "../../types";

import { Navigation } from "../PI-003-NavBar";
import { Cards } from "../PI006-Card";

import classNames from "classnames";

const LinkFornecedor = () => {
  const [names, setNames] = useState<string[]>([]);
  const [seeMore, setSeeMore] = useState(false);
  const [stores, setStores] = useState([]);
  const [nameOfOption, setNameOfOption] = useState("");
  const [products, setProducts] = useState<IProduct[]>([]);

  const handleGetOptions = async (name: string) => {
    await api.get(`/accounts`).then((response) => {
      const data = response.data.filter((item: IJson) => {
        return item.nome === name;
      });

      setStores([data[0].products]);
    });

    let storesArray = [];

    stores.map((item: IJson) => {
      return storesArray.push(item);
    });

    setProducts(storesArray[0]);

  };

  const handleChangeOptions = (e: any) => {
    event?.preventDefault();
    const { title } = e.target;
    setNameOfOption(title);
    handleGetOptions(title);
  };

  useEffect(() => {
    async function loadStores() {
      const response = await api.get("/accounts");
      let namesP: string[] = [];

      response.data.map((dados: IJson) => {
        namesP.push(dados.nome);
      });

      const namesFilter = namesP.filter((item, index) => {
        return namesP.indexOf(item) === index;
      });

      setNames(namesFilter);
    }

    loadStores();
  }, [nameOfOption]);

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
        {names.map((name, index) => (
          <a
            onClick={handleChangeOptions}
            key={`${index}+${name}`}
            title={name}
            className={classNames({
              OptionsName: true,
              active: nameOfOption === name,
            })}
          >
            {name}
          </a>
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
                  <input type="radio" className="radio_style" name="" />
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
