// src/pages/RegistrarEntrada/index.jsx
import React, { useState } from "react";
import TopBar from "../../components/TopBar";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { EntradaWrapper, FormCard, TitleRow } from "./style";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function RegistrarEntrada() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ placa: "", horario: "", data: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleConfirm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/api/veiculos/entrada", {
        placa: form.placa,
        horario: form.horario,
        data: form.data,
      });
      alert("Entrada registrada.");
      navigate("/veiculos");
    } catch (err) {
      alert("Erro ao registrar entrada.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TopBar />
      <EntradaWrapper>
        <FormCard>
          <TitleRow>ENTRADA</TitleRow>
          <form onSubmit={handleConfirm}>
            <Input label="Placa:" name="placa" placeholder="Insira a placa do veículo" value={form.placa} onChange={handleChange} />
            <Input label="Horário:" name="horario" placeholder="Insira o horário de entrada do veículo" value={form.horario} onChange={handleChange} />
            <Input label="Data:" name="data" placeholder="Insira a data de entrada do veículo" value={form.data} onChange={handleChange} />
            <div style={{ marginTop: 25 }}>
              <Button type="submit" disabled={loading}>Confirmar</Button>
            </div>
          </form>
        </FormCard>
      </EntradaWrapper>
    </>
  );
}