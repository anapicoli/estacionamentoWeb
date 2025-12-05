// src/pages/ListaVeiculos/index.jsx
import React, { useEffect, useState } from "react";
import TopBar from "../../components/TopBar";
import CardVeiculo from "../../components/CardVeiculo";
import Button from "../../components/Button";
import { ListaWrapper, TitleRow, SearchRow, CardsGrid, FooterButton } from "./style";
import api from "../../services/api";

export default function ListaVeiculos() {
  const [veiculos, setVeiculos] = useState([]);
  const [busca, setBusca] = useState("");

  const fetchVeiculos = async () => {
    try {
      const res = await api.get("/api/veiculos");
      setVeiculos(res.data);
    } catch (err) {
      console.error(err);
      alert("Erro ao buscar veículos.");
    }
  };

  useEffect(() => {
    fetchVeiculos();
  }, []);

  const handleBuscar = async () => {
    if (!busca) return fetchVeiculos();
    try {
      const res = await api.get(`/api/veiculos/placa/${busca}`);
      setVeiculos(res.data);
    } catch (err) {
      alert("Erro na busca por placa.");
    }
  };

  return (
    <>
      <TopBar showBack={false} />
      <ListaWrapper>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <TitleRow>VEÍCULOS ATIVOS</TitleRow>
          <SearchRow>
            <input placeholder="Buscar placa" value={busca} onChange={(e) => setBusca(e.target.value)} style={{ width: 500, height: 45, padding: 10, borderRadius: 8 }} />
            <button onClick={handleBuscar}>Buscar</button>
          </SearchRow>
        </div>

        <CardsGrid>
          {veiculos && veiculos.length > 0 ? (
            veiculos.map((v) => <CardVeiculo key={v.id} veiculo={v} />)
          ) : (
            <p>Nenhum veículo ativo</p>
          )}
        </CardsGrid>

        <FooterButton>
          <Button onClick={() => window.location.href = "/entrada"}>Registrar entrada</Button>
        </FooterButton>
      </ListaWrapper>
    </>
  );
}