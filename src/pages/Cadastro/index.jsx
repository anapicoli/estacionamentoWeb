import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/api";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, Form } from "./style";

export default function Cadastro() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = async () => {
    try {
      await register({ nome, email, senha });
      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (err) {
      alert("Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <Container>
      <Form>
        <Input placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        <Button onClick={handleCadastro}>Cadastrar</Button>
      </Form>
    </Container>
  );
}