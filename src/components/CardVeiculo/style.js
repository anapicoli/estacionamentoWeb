import styled from "styled-components";
import { colors, shadows } from "../../theme/theme";

export const CardContainer = styled.div`
  width: 305px;
  height: 125px;
  padding: 20px;
  background-color: ${colors.amareloPastel};
  border-radius: 15px;
  box-shadow: ${shadows.cardVeiculos};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Placa = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 20px;
`;

export const InfoText = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
`;

export const ButtonSaida = styled.button`
  width: 130px;
  height: 25px;
  border-radius: 100px;
  border: none;
  background-color: ${colors.marrom};
  color: ${colors.branco};
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  cursor: pointer;
`;