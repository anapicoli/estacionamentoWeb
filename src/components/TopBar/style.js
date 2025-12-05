// src/components/TopBar/style.js
import styled from "styled-components";
import theme from "../../theme/theme";

export const TopBarWrapper = styled.header`
  width: 100%;
  height: 202px;
  background: ${theme.colors.amarelo_vibrante};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 40px;
`;

export const LogoImg = styled.img`
  width: 202px;
  height: 202px;
  object-fit: contain;
`;

export const BackButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;