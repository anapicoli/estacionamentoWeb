import styled from "styled-components";
import theme from "../../theme/theme";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const Label = styled.label`
  font-family: ${theme.fonts.inter};
  font-size: 20px;
  color: ${theme.colors.preto};
`;

export const InputField = styled.input`
  width: 535px;
  height: 70px;
  padding: 18px;
  border-radius: 15px;
  border: none;
  box-shadow: ${theme.shadows.input};
  font-family: ${theme.fonts.inter};
  font-size: 20px;
  outline: none;
`;