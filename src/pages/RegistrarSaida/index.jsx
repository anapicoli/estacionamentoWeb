import { useState } from "react";
import { registrarSaida, getVeiculoByPlaca } from "../../services/api";
import Input from "../../components/Input";
import Button from "../../components/Button";
import TopBar from "../../components/TopBar";
import { Container, Form } from "./style";

export default function RegistrarSaida() {
  const [placa, setPlaca] = useState("");
  const [veiculo, setVeiculo] = useState(null);

  const handleBuscar = async () => {
    try {
      const { data } = await getVeiculoByPlaca(placa);
      if (data.length === 0) {
        alert("Veículo não encontrado.");
        setVeiculo(null);
      } else {
        setVeiculo(data[0]);
      }
    } catch (err) {
      alert("Erro ao buscar veículo.");
    }
  };

  const handleRegistrarSaida = async () => {
    try {
      await registrarSaida({ id: veiculo.id });
      alert("Saída registrada com sucesso!");
      setVeiculo(null);
      setPlaca("");
    } catch (err) {
      alert("Erro ao registrar saída.");
    }
  };

  return (
    <Container>
      <TopBar />
      <Form>
        <Input placeholder="Placa do veículo" value={placa} onChange={(e) => setPlaca(e.target.value)} />
        <Button onClick={handleBuscar}>Buscar veículo</Button>
        {veiculo && (
          <>
            <p>Placa: {veiculo.placa}</p>
            <p>Entrada: {veiculo.dataEntrada} {veiculo.horaEntrada}</p>
            <Button onClick={handleRegistrarSaida}>Registrar saída</Button>
          </>
        )}
      </Form>
    </Container>
  );
}