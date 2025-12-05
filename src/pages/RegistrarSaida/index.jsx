// src/pages/RegistrarSaida/index.jsx
import React, { useEffect, useState } from "react";
import TopBar from "../../components/TopBar";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { SaidaWrapper, FormCard, TitleRow } from "./style";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";

export default function RegistrarSaida() {
  const navigate = useNavigate();
  const { placa: placaParam } = useParams();
  const [form, setForm] = useState({
    placa: placaParam || "",
    horarioEntrada: "",
    dataEntrada: "",
    horarioSaida: "",
    dataSaida: "",
    valor: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (placaParam) buscarPorPlaca(placaParam);
    // eslint-disable-next-line
  }, [placaParam]);

  const buscarPorPlaca = async (placa) => {
    try {
      const res = await api.get(`/api/veiculos/placa/${placa}`);
      // A API pode retornar array: escolher o último ativo
      const data = Array.isArray(res.data) ? res.data[res.data.length - 1] : res.data;
      setForm((f) => ({
        ...f,
        placa: data.placa || placa,
        horarioEntrada: data.horaEntrada || data.horarioEntrada || "",
        dataEntrada: data.dataEntrada || data.data || "",
      }));
    } catch (err) {
      console.error(err);
      alert("Não foi possível buscar dados do veículo.");
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Observação do professor: enviar apenas PLACA no body de saida
  const handleConfirm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/api/veiculos/saida", { placa: form.placa });
      alert("Saída registrada. Valor calculado pela API.");
      navigate("/veiculos");
    } catch (err) {
      alert("Erro ao registrar saída.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TopBar />
      <SaidaWrapper>
        <FormCard>
          <TitleRow>SAÍDA</TitleRow>
          <form onSubmit={handleConfirm}>
            <Input label="Placa:" name="placa" placeholder="XXXXXXX" value={form.placa} onChange={handleChange} />
            <Input label="Horário da entrada:" name="horarioEntrada" placeholder="HH:MM" value={form.horarioEntrada} onChange={handleChange} />
            <Input label="Data de entrada:" name="dataEntrada" placeholder="DD/MM/AAAA" value={form.dataEntrada} onChange={handleChange} />
            <Input label="Horário de saída:" name="horarioSaida" placeholder="HH:MM" value={form.horarioSaida} onChange={handleChange} />
            <Input label="Data de saída:" name="dataSaida" placeholder="DD/MM/AAAA" value={form.dataSaida} onChange={handleChange} />
            <Input label="Valor a ser pago:" name="valor" placeholder="R$ XX,XX" value={form.valor} onChange={handleChange} />
            <div style={{ marginTop: 25 }}>
              <Button type="submit" disabled={loading}>Confirmar</Button>
            </div>
          </form>
        </FormCard>
      </SaidaWrapper>
    </>
  );
}