// src/pages/Cadastro/index.jsx
import React, { useState } from "react";
import TopBar from "../../components/TopBar";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { CadastroWrapper, FormCard, TitleRow } from "./style";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ nome: "", email: "", senha: "", confirma: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    if (form.senha !== form.confirma) return alert("Senhas não conferem");
    setLoading(true);
    try {
      await api.post("/auth/register", { nome: form.nome, email: form.email, senha: form.senha });
      alert("Cadastro realizado. Faça login.");
      navigate("/login");
    } catch (err) {
      alert("Erro no cadastro.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TopBar showBack={true} />
      <CadastroWrapper>
        <FormCard>
          <TitleRow>CADASTRO</TitleRow>
          <form onSubmit={handleRegister}>
            <Input label="Nome completo:" name="nome" placeholder="Insira seu nome completo" value={form.nome} onChange={handleChange} />
            <Input label="Email:" name="email" placeholder="Insira seu email" value={form.email} onChange={handleChange} />
            <Input label="Senha:" name="senha" type="password" placeholder="Insira uma senha" value={form.senha} onChange={handleChange} />
            <Input label="Confirme sua senha:" name="confirma" type="password" placeholder="Confirme sua senha" value={form.confirma} onChange={handleChange} />
            <div style={{ marginTop: 25 }}>
              <Button type="submit" variant="primary" disabled={loading}>Enviar</Button>
            </div>
          </form>
        </FormCard>
      </CadastroWrapper>
    </>
  );
}