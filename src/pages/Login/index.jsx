import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/api";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, Form, LinkText } from "./style";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    try {
      await login({ email, senha });
      navigate("/veiculos");
    } catch (err) {
      alert("Erro no login! Verifique suas credenciais.");
    }
  };

  return (
    <Container>
      <Form>
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        <LinkText onClick={() => alert("Esqueci a senha!")}>Esqueci a senha</LinkText>
        <Button onClick={handleLogin}>Entrar</Button>
        <LinkText onClick={() => navigate("/cadastro")}>Não tenho cadastro</LinkText>
      </Form>
    </Container>
  );
}