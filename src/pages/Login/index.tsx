import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Inputs } from "./styles";
import logo from "../../assets/logo.svg";

export function Login() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

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

      <Inputs>
        <span>Login</span>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>
          Não tem cadastro?<Link to="/novo_usuario">Criar agora</Link>
        </p>
        <button onClick={handleLogin}>Entrar</button>
      </Inputs>
    </Container>
  );
}
