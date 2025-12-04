import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import ListaVeiculos from "../pages/ListaVeiculos";
import RegistrarEntrada from "../pages/RegistrarEntrada";
import RegistrarSaida from "../pages/RegistrarSaida";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/veiculos" element={<ListaVeiculos />} />
        <Route path="/registrar-entrada" element={<RegistrarEntrada />} />
        <Route path="/registrar-saida" element={<RegistrarSaida />} />
      </Routes>
    </Router>
  );
}