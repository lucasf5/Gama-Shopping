import { ArrowCounterClockwise } from "phosphor-react";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../contexts/useCart";
import { api } from "../../services/api";
import { formatPrice } from "../../util/format";
import { ButtonCart } from "../PI006-ButtonCart";
import { IProduct } from "../PI008-BuyingItens/intex";
import { Container, ContainerImage, ContainerProducts } from "./styles";

const Produto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = React.useState({});
  const [pictures, setPictures] = React.useState([]);

  const { addProduct } = useCart();

  useEffect(() => {
    const loadProduct = async () => {
      const response = await api.get(`/items/${id}`);
      setProduct(response.data);
      setPictures(response.data.pictures[0]);
    };

    loadProduct();
  }, [id]);

  const handleOnUpdateQuantity = (productId: number) => {
    addProduct(productId);
  };

  return (
    <section>
      <button
        style={{
          marginLeft: "1rem",
          marginTop: "1rem",
          cursor: "pointer",
          backgroundColor: "transparent",
          border: "none",
        }}
      >
        <ArrowCounterClockwise size={32} onClick={() => navigate(-1)} />
      </button>
      <Container>
        <ContainerImage>
          <img src={pictures.url} alt={pictures.title} />
        </ContainerImage>
        <ContainerProducts>
          <h1>{product.title}</h1>
          <p>{product.warranty}</p>
          <article>
            <p>{formatPrice(product.price)}</p>
            <ButtonCart
              onUpdateQuantity={() => handleOnUpdateQuantity(product.id)}
            />
          </article>
        </ContainerProducts>
      </Container>
    </section>
  );
};

export default Produto;
