import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, FormContainer } from "./styles";
import logo from "../../assets/logo.svg";

export function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    setUser(user);
    setPassword(password);
    console.log(`User: ${user}`, `Password: ${password}`);
  }

  return (
    <Container>
      <div>
        <img src={logo} alt="Logo Gama Shopping em roxo" />
      </div>

      <FormContainer onSubmit={handleLogin}>
        <span>Faça seu login</span>
        <label htmlFor="email"> E-mail:
          <input
            id="email"
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </label>
        <label htmlFor="password">Senha:
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <p>
          Não tem cadastro?<Link to="/novo_usuario">Criar agora</Link>
        </p>
        <button>Entrar</button>
      </FormContainer>
    </Container>
  );
}
