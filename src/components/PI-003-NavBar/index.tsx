import axios from "axios";
import { useEffect, useState } from "react";
import Logo_Navbar from "../../assets/LogoGama.svg";
import { useCart } from "../../contexts/useCart";
import { ButtonCart } from "../PI006-ButtonCart";
import { Container, ContainerPrincipal } from "./styles";
import Point from "../../assets/imgs/Point.svg";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import { useNavigate } from "react-router-dom";

export function Navigation() {
  const { cep, setIsOpen, cart } = useCart();
  const [adress, setAdress] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
      setAdress(response.data.localidade);
      localStorage.setItem(
        "@GamaShopping:adress",
        JSON.stringify(response.data.localidade)
      );
    });
  }, [cep]);

  useEffect(() => {
    const adress = localStorage.getItem("@GamaShopping:adress");
    if (adress) {
      setAdress(JSON.parse(adress));
      setIsOpen(false);
    }
  }, []);
  return (
    <ContainerPrincipal>
      <Container>
        <img src={Logo_Navbar} className="Logo" onClick={()=> {
          navigate("/cliente");
        }}/>
        <div className="localizacao">
          <div className="cidade" onClick={() => setIsOpen(true)}>
            <img src={Point} />
            <span>{adress}</span>
          </div>
          <IconButton disabled={cart.length === 0} className="iconButton">
            <Badge color="primary" badgeContent={cart.length}>
              <ShoppingCartIcon
                onClick={() => navigate("/carrinho")}
                style={{ cursor: "pointer", color: "#fff", fontSize: "30px" }}
              />
            </Badge>
          </IconButton>
        </div>
      </Container>
    </ContainerPrincipal>
  );
}
