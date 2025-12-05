// src/pages/Cadastro/style.js
import styled from "styled-components";
import theme from "../../theme/theme";

export const CadastroWrapper = styled.main`
  display:flex;
  justify-content:center;
  padding: 40px 0 80px 0;
`;

export const FormCard = styled.div`
  width: 635px;
  background: ${theme.colors.amarelo_pastel};
  border-radius: 30px;
  padding: 50px;
  display:flex;
  flex-direction:column;
  gap: 18px;
`;

export const TitleRow = styled.h2`
  font-family: ${theme.fonts.bebas};
  font-size: 50px;
  text-align:center;
  width: 100%;
  background: ${theme.colors.amarelo_vibrante};
  padding: 17px 113px;
  border-radius: 30px;
  box-shadow: ${theme.shadows.titulo};
`;