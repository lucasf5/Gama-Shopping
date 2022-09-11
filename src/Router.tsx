import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { CadastroProduto } from './pages/CadastroProduto'
import { CadastroUsuario } from './pages/CadastroUsuario'
import { Checkout } from './pages/Checkout'
import { Login } from './pages/Login'
import { PaginaCliente } from './pages/PaginaCliente'
import { PaginaVendedor } from './pages/PaginaVendedor'
import { Sucesso } from './pages/Sucesso'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Login />} />
        <Route path="/novo_usuario" element={<CadastroUsuario />} />
        <Route path="/novo_produto" element={<CadastroProduto />} />
        <Route path="/cliente" element={<PaginaCliente />} />
        <Route path="/vendedor" element={<PaginaVendedor />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sucesso" element={<Sucesso />} />
      </Route>
    </Routes>
  )
}