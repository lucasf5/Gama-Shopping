import { Routes, Route } from "react-router-dom";
import Produto from "./components/PI016-Produto";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { CadastroProduto } from "./pages/CadastroProduto";
import { CadastroUsuario } from "./pages/CadastroUsuario";
import { Checkout } from "./pages/Checkout";
import { Login } from "./pages/Login";
import { PaginaCliente } from "./pages/PaginaCliente";
import { Sucesso } from "./pages/Sucesso";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/novo_usuario" element={<CadastroUsuario />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/cliente" element={<PaginaCliente />} />
        <Route path="/carrinho" element={<Checkout />} />
        <Route path="/sucesso" element={<Sucesso />} />
        <Route path="/produto/:id" element={<Produto />} />
      </Route>
    </Routes>
  );
}
