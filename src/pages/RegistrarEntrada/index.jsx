import { useState } from "react";
import { registrarEntrada } from "../../services/api";
import Input from "../../components/Input";
import Button from "../../components/Button";
import TopBar from "../../components/TopBar";
import { Container, Form } from "./style";

export default function RegistrarEntrada() {
  const [placa, setPlaca] = useState("");

  const handleRegistrar = async () => {
    try {
      await registrarEntrada({ placa });
      alert("Entrada registrada com sucesso!");
      setPlaca("");
    } catch (err) {
      alert("Erro ao registrar entrada.");
    }
  };

  return (
    <Container>
      <TopBar />
      <Form>
        <Input placeholder="Placa do veículo" value={placa} onChange={(e) => setPlaca(e.target.value)} />
        <Button onClick={handleRegistrar}>Registrar entrada</Button>
      </Form>
    </Container>
  );
}