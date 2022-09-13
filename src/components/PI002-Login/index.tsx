import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ContainerSection,
  FormContainer,
  AlertContainer,
  Container,
  Background,
} from "./styles";
import GamaShopping from "../../assets/imgs/GamaShopping.svg";
import Shield from "../../assets/imgs/Shield-Fail.svg";
import { api } from "../../services/api";
import { IEventEmailRegister, IEventEmail, ICadastro } from "../../types";
import toast, { Toaster } from "react-hot-toast";
const Login = () => {
  const [dados, setDados] = useState<IEventEmail>({
    email: "",
    senha: "",
  });

  const [cadastros, setCadastros] = useState<ICadastro[]>([]);
  const [alert, setAlert] = useState(false);

  const notifySucess = () => toast.success("Login realizado com sucesso!");
  const notifyError = () =>
    toast.error("Alguma coisa deu errado, tente novamente!");

  const handleChange = (event: { target: IEventEmailRegister }) => {
    const { name, value } = event.target;
    setDados({
      ...dados,
      [name]: value,
    });
  };

  const Navigate = useNavigate();

  useEffect(() => {
    const getAllUsers = async () => {
      const response = await api.get("/accounts");
      setCadastros(response.data);
    };
    getAllUsers();
  }, []);

  const verificarLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { email, senha } = dados;

    const possuiCadastro = cadastros.find(
      (cadastro) => cadastro.email === email
    );

    if (possuiCadastro) {
      if (possuiCadastro.password === senha) {
        notifySucess();
        setTimeout(() => {
          Navigate("/cliente");
        }, 2000);
      } else {
        notifyError();
      }
    } else {
      setAlert(true);
      notifyError();
    }
  };

  return (
    <Container>
      <ContainerSection>
        <Background></Background>
        <Toaster position="bottom-right" reverseOrder={false} />

        <FormContainer onSubmit={verificarLogin}>
          <img src={GamaShopping} alt="Logo Gama Shopping em roxo" />
          <h1>Bem vindo(a)!</h1>
          <h3>Entre ou cadastre-se usando email.</h3>
          <label htmlFor="email">
            E-mail:
            <input
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
              id="password"
              type="password"
              name="senha"
              value={dados.senha}
              onChange={handleChange}
              required
            />
          </label>
          {alert && (
            <AlertContainer>
              <img src={Shield} alt="Shield" className="AlertImage" />
              <p>
                Não tem cadastro?<Link to="/novo_usuario">Criar agora</Link>
              </p>
            </AlertContainer>
          )}

          <button>Entrar</button>
        </FormContainer>
      </ContainerSection>
    </Container>
  );
};

export default Login;
