// src/pages/RegistrarSaida/style.js
import styled from "styled-components";
import theme from "../../theme/theme";

export const SaidaWrapper = styled.main`
  display:flex;
  justify-content:center;
  padding: 40px 0 80px 0;
`;

export const FormCard = styled.div`
  width: 435px;
  background: ${theme.colors.amarelo_pastel};
  border-radius: 30px;
  padding: 30px;
  display:flex;
  flex-direction:column;
  gap: 18px;
  align-items:flex-start;
`;

export const TitleRow = styled.h2`
  font-family: ${theme.fonts.bebas};
  font-size: 36px;
  text-align:center;
  width: 100%;
  background: ${theme.colors.amarelo_vibrante};
  padding: 12px 50px;
  border-radius: 30px;
  box-shadow: ${theme.shadows.titulo};
`;