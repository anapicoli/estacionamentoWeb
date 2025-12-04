import styled from "styled-components";
import { colors } from "../../theme/theme";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.div`
  width: 635px;
  padding: 50px;
  border-radius: 30px;
  background-color: ${colors.amareloPastel};
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const LinkText = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: ${colors.preto};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;