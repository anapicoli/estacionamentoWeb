// src/components/Button/style.js
import styled from "styled-components";
import theme from "../../theme/theme";

export const ButtonStyled = styled.button`
  background: ${(props) => (props.variant === "primary" ? theme.colors.marrom : theme.colors.amarelo_vibrante)};
  color: ${theme.colors.branco};
  font-family: ${theme.fonts.nunito};
  font-size: 25px;
  border: none;
  padding: 12px 28px;
  border-radius: 100px;
  cursor: pointer;
  box-shadow: ${theme.shadows.titulo};
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`;