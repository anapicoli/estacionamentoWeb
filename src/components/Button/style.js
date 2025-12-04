import styled from "styled-components";
import { colors } from "../../theme/theme";

export const ButtonStyled = styled.button`
  background-color: ${colors.amareloVibrante};
  border: none;
  border-radius: 100px;
  padding: 12px 25px;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 25px;
  cursor: pointer;
  color: ${colors.preto};
  &:hover {
    opacity: 0.8;
  }
`;