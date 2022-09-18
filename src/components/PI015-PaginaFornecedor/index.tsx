import { Cardholder, CircleWavyCheck, Storefront, Truck } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { Navigation } from "../PI-003-NavBar";
import { CardFornecedor } from "../PI015-CardFornecedor";
import { Container, IconsType } from "./styles";

export function PaginaFornecedor() {
  return (
    <Container>
      <Navigation />
      <div className="banner">
        <div className="description">
          <h1>Goldentec</h1>
          <p>A melhor solução em produtos de tecnologia. Notebooks, cadeiras, soundbar, mouses e muito mais. Entre no site e confira!</p>

          <div className="icons-wrapper">
            <IconsType className="icons-content" variant="purple">
              <Cardholder size={18} weight="fill" />
              <span>Aceita cartão de crédito e débito</span>
            </IconsType>

            <IconsType className="icons-content" variant="gray">
              <Truck size={18} weight="fill" />
              <span>Entrega rápida e rastreada</span>
            </IconsType>

            <IconsType className="icons-content" variant="yellow">
              <Storefront size={18} weight="fill" />
              <span>Loja física em São Paulo</span>
            </IconsType>

            <IconsType className="icons-content" variant="green">
              <CircleWavyCheck size={18} weight="fill" />
              <span>Garantia de 1 ano</span>
            </IconsType>
          </div>
        </div>

        <div className="img-container">
          <img src="https://lojagoldentec.vteximg.com.br/arquivos/GT-Colored@2x.png?v=637813357630630000" alt="" />
        </div>
      </div>

      <div className="link-fornecedor">
        <h2> Goldentec </h2>
        <NavLink to="/novo_produto">Cadastrar produto</NavLink>
      </div>
      <CardFornecedor />
    </Container>
  )
}