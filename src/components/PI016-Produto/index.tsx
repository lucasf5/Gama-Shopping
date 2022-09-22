import { ArrowCounterClockwise } from "phosphor-react";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../contexts/useCart";
import { api } from "../../services/api";
import { formatPrice } from "../../util/format";
import { ButtonCart } from "../PI006-ButtonCart";
import { Container, ContainerImage, ContainerProducts } from "./styles";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Controller,
  Virtual,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Produto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = React.useState<any>({});
  const [pictures, setPictures] = React.useState<any>([]);

  const { addProduct } = useCart();

  useEffect(() => {
    const loadProduct = async () => {
      const response = await api.get(`/items/${id}`);
      setProduct(response.data);
      setPictures(response.data.pictures);
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
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="mySwiper"
        >
          {pictures.map((picture: any) => (
            <SwiperSlide>
              <ContainerImage>
                <img src={picture.url} alt={picture.title} />
              </ContainerImage>
            </SwiperSlide>
          ))}
        </Swiper>
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
