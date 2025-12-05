// src/pages/ListaVeiculos/style.js
import styled from "styled-components";
import theme from "../../theme/theme";

export const ListaWrapper = styled.main`
  padding: 25px 80px;
`;

export const TitleRow = styled.h2`
  font-family: ${theme.fonts.bebas};
  font-size: 32px;
`;

export const SearchRow = styled.div`
  display:flex;
  gap: 12px;
  align-items:center;
`;

export const CardsGrid = styled.div`
  margin-top: 45px;
  display:grid;
  grid-template-columns: repeat(auto-fill, 305px);
  gap: 20px;
`;

export const FooterButton = styled.div`
  display:flex;
  justify-content:center;
  margin: 50px 0;
`;