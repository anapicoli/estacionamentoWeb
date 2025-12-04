import { useEffect, useState } from "react";
import { getVeiculosAtivos } from "../../services/api";
import CardVeiculo from "../../components/CardVeiculo";
import TopBar from "../../components/TopBar";
import { Container, CardsContainer } from "./style";
import { useNavigate } from "react-router-dom";

export default function ListaVeiculos() {
  const [veiculos, setVeiculos] = useState([]);
  const navigate = useNavigate();

  const fetchVeiculos = async () => {
    try {
      const { data } = await getVeiculosAtivos();
      setVeiculos(data);
    } catch (err) {
      alert("Erro ao buscar veículos ativos.");
    }
  };

  const handleRegistrarSaida = (veiculo) => {
    navigate(`/registrar-saida`, { state: { veiculo } });
  };

  useEffect(() => {
    fetchVeiculos();
  }, []);

  return (
    <Container>
      <TopBar />
      <CardsContainer>
        {veiculos.map((v) => (
          <CardVeiculo key={v.id} veiculo={v} onRegistrarSaida={handleRegistrarSaida} />
        ))}
      </CardsContainer>
    </Container>
  );
}