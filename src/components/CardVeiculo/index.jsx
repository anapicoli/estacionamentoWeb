// src/components/CardVeiculo/index.jsx
import React from "react";
import { Card, Plate, MetaRow, LabelSmall, ActionButton } from "./style";
import { useNavigate } from "react-router-dom";

export default function CardVeiculo({ veiculo }) {
  const navigate = useNavigate();

  const abrirSaida = () => {
    // usa rota de saida com a placa
    navigate(`/saida/${veiculo.placa}`);
  };

  return (
    <Card>
      <Plate>{veiculo.placa}</Plate>
      <MetaRow>
        <LabelSmall>{veiculo.dataEntrada || veiculo.data || ""}</LabelSmall>
        <LabelSmall>{veiculo.horaEntrada || veiculo.hora || ""}</LabelSmall>
      </MetaRow>
      <ActionButton onClick={abrirSaida}>Registrar saída</ActionButton>
    </Card>
  );
}