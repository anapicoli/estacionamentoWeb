// src/pages/Login/style.js
import styled from "styled-components";
import theme from "../../theme/theme";

export const LoginWrapper = styled.main`
  display:flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 0 80px 0;
`;

export const TitleRow = styled.h2`
  font-family: ${theme.fonts.bebas};
  font-size: 50px;
  text-align:center;
  width: 315px;
  height: 85px;
  background: ${theme.colors.amarelo_vibrante};
  padding: 17px 113px;
  border-radius: 30px;
  box-shadow: ${theme.shadows.titulo};
  margin-bottom: -21px;
`;

export const FormCard = styled.div`
  width: 635px;
  height: 456px;
  background: ${theme.colors.amarelo_vibrante};
  border-radius: 30px;
  padding: 50px;
  display:flex;
  flex-direction:column;
  gap: 18px;
  align-items:flex-start;
`;

export const ActionsRow = styled.div`
  margin-top: 25px;
  display:flex;
  align-items:center;
  gap: 15px;
`;

export const SmallLink = styled.button`
  margin-top: 15px;
  background: transparent;
  border: none;
  font-family: ${theme.fonts.inter};
  font-size: 18px;
  color: ${theme.colors.preto};
  cursor: pointer;
  align-self:flex-end;
`;