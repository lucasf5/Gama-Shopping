import { formatPrice } from "../../util/format";
import { useCart } from "../../contexts/useCart";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { CardContainer, CardCard, CardCardContainer } from "./styles";
import { ButtonCart } from "../PI006-ButtonCart";
import { IProduct, ProductFormatted } from "../../types";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface CartItemsAmount {
  [key: number]: number;
}

export function Cards() {
  const { setPesquisa, pesquisa, products, setProducts, addProduct } = useCart();

  const navigate = useNavigate();

  const handleOnUpdateQuantity = (productId: number) => {
    addProduct(productId);
  }

  useEffect(() => {
    async function loadProducts() {
      const response = await axios.get(
        `https://api.mercadolibre.com/sites/MLB/search?q=$${pesquisa}`
      );

      const all = await axios.get(
        'https://api.mercadolibre.com/sites/MLB/search?q=$all'
      );

      if (pesquisa === "") {
        setProducts(all.data.results);
      } else {
        setProducts(response.data.results);
      }

    }

    loadProducts();
  }, [pesquisa]);

  useEffect(() => {
    async function loadProducts() {
      const response = await axios.get(
        "https://api.mercadolibre.com/sites/MLB/search?q=$all"
      );

      const results = response.data.results;

      setProducts(results);
    }
    loadProducts();
  }, []);

  return (
    <CardCardContainer>
      <input type="text" placeholder="Pesquisar" onChange={(e)=> setPesquisa(e.target.value)} value={pesquisa}/>
      <CardCard>
        {products.map(({ id, thumbnail, title, price }: ProductFormatted) => {
          return (
            <CardContainer key={id}>
              <img src={thumbnail} alt=""  onClick={
              () => {
                navigate(`/produto/${id}`)
              }
            }/>
              <h1>{title}</h1>
              <article>
                <p>{formatPrice(price)}</p>
                <ButtonCart onUpdateQuantity={()=> handleOnUpdateQuantity(id)}/>
              </article>
            </CardContainer>
          );
        })}
      </CardCard>
    </CardCardContainer>
  );
}
