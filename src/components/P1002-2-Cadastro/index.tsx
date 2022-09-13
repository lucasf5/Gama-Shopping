import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ContainerSection,
  FormContainer,
  Container,
  Background,
} from "./styles";
import GamaShopping from "../../assets/imgs/GamaShopping.svg";
import { api } from "../../services/api";
import { IEventEmailRegister, IEventEmailCadastro } from "../../types";
import toast, { Toaster } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const Cadastro = () => {
  const Navigate = useNavigate();
  const [cadastros, setCadastros] = useState<IEventEmailCadastro[]>([]);
  const [dados, setDados] = useState<IEventEmailCadastro>({
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleChange = (event: { target: IEventEmailRegister }) => {
    const { name, value } = event.target;
    setDados({
      ...dados,
      [name]: value,
    });
  };

  useEffect(() => {
    const getAllUsers = async () => {
      const response = await api.get("/accounts");
      setCadastros(response.data);
    };
    getAllUsers();
  }, []);

  const RealizaCadastro = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { email, senha, confirmarSenha } = dados;

    const possuiCadastro = cadastros.find(
      (cadastro) => cadastro.email === email
    )

    if (possuiCadastro) {
      toast.error("Email já cadastrado");
    } else {
      if (senha.length < 6) {
        toast.error("Senha deve ter no mínimo 6 caracteres");
      } else {
        if (senha !== confirmarSenha) {
          toast.error("Senhas não conferem");
        } else {
          const response = await api.post("/accounts", {
            email,
            password: senha,
            id: uuidv4(),
          });
          if (response.status === 201) {
            toast.success("Cadastro realizado com sucesso!");
            setTimeout(() => {
              Navigate("/");
            }, 2000);
          } else {
            toast.error("Erro ao realizar o cadastro");
          }
        }
      }
    }
  };

  return (
    <Container>
      <ContainerSection>
        <Background></Background>
        <Toaster position="bottom-right" reverseOrder={false} />

        <FormContainer onSubmit={RealizaCadastro}>
          <img src={GamaShopping} alt="Logo Gama Shopping em roxo" />
          <h1>Bem vindo(a)!</h1>
          <h3>Cadastre-se usando email.</h3>
          <label htmlFor="email">
            E-mail:
            <input
              className="inputText"
              id="email"
              type="text"
              name="email"
              value={dados.email}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              className="inputText"
              id="password"
              type="password"
              name="senha"
              value={dados.senha}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="password">
            Confirmar senha:
            <input
              className="inputText"
              type="password"
              name="confirmarSenha"
              value={dados.confirmarSenha}
              onChange={handleChange}
              required
            />
          </label>
          <article className="inputCheckbox">
            <div>
              <input type="checkbox" name="checkbox" />
            </div>
            <div>Você é vendedor?</div>
          </article>

          <button>Cadastrar</button>
        </FormContainer>
      </ContainerSection>
    </Container>
  );
};

export default Cadastro;
