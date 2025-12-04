import styled from "styled-components";
import { colors, shadows } from "../../theme/theme";

export const InputStyled = styled.input`
  width: 535px;
  height: 70px;
  padding: 0 20px;
  border-radius: 15px;
  border: 1px solid ${colors.cinza};
  box-shadow: ${shadows.barraInput};
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  outline: none;
`;