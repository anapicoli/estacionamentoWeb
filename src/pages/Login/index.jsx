// src/pages/Login/index.jsx
import React, { useState } from "react";
import TopBar from "../../components/TopBar";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { LoginWrapper, FormCard, TitleRow, ActionsRow, SmallLink } from "./style";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", senha: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/auth/login", { email: form.email, senha: form.senha });
      const token = res.data?.token || res.data;
      localStorage.setItem("token", token);
      // busca dados do usuario opcional
      navigate("/veiculos");
    } catch (err) {
      alert("Falha no login. Verifique credenciais.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TopBar showBack={false} />
      <LoginWrapper>
        <TitleRow>LOGIN</TitleRow>
        <FormCard>
          <form onSubmit={handleLogin}>
            <Input label="Email:" name="email" placeholder="insira seu email" value={form.email} onChange={handleChange} />
            <Input label="Senha:" name="senha" type="password" placeholder="insira sua senha" value={form.senha} onChange={handleChange} />
            <SmallLink onClick={() => alert("Funcionalidade: recuperar senha.")}>Esqueci a senha</SmallLink>
            <ActionsRow>
              <Button type="submit" variant="primary" onClick={handleLogin} disabled={loading}>
                Entrar
              </Button>
              <SmallLink onClick={() => navigate("/cadastro")}>Não tenho cadastro</SmallLink>
            </ActionsRow>
          </form>
        </FormCard>
      </LoginWrapper>
    </>
  );
}