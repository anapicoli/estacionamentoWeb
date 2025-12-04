import { CardContainer, Placa, InfoText, ButtonSaida } from "./style";

export default function CardVeiculo({ veiculo, onRegistrarSaida }) {
  return (
    <CardContainer>
      <Placa>{veiculo.placa}</Placa>
      <InfoText>Entrada: {veiculo.horaEntrada} - {veiculo.dataEntrada}</InfoText>
      <InfoText>Saída: {veiculo.horaSaida || "--"} - {veiculo.dataSaida || "--"}</InfoText>
      <InfoText>Valor: R$ {veiculo.valor || "0,00"}</InfoText>
      <ButtonSaida onClick={() => onRegistrarSaida(veiculo)}>Registrar saída</ButtonSaida>
    </CardContainer>
  );
}