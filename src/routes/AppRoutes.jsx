import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import ListaVeiculos from "../pages/ListaVeiculos";
import RegistrarEntrada from "../pages/RegistrarEntrada";
import RegistrarSaida from "../pages/RegistrarSaida";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route
        path="/veiculos"
        element={
          <PrivateRoute>
            <ListaVeiculos />
          </PrivateRoute>
        }
      />
      <Route
        path="/entrada"
        element={
          <PrivateRoute>
            <RegistrarEntrada />
          </PrivateRoute>
        }
      />
      <Route
        path="/saida/:placa?"
        element={
          <PrivateRoute>
            <RegistrarSaida />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
    </Routes>
  );
}