// src/components/CardVeiculo/style.js
import styled from "styled-components";
import theme from "../../theme/theme";

export const Card = styled.div`
  width: 305px;
  height: 125px;
  background: ${theme.colors.amarelo_pastel};
  border-radius: 12px;
  padding: 20px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  box-shadow: ${theme.shadows.card};
`;

export const Plate = styled.div`
  font-family: ${theme.fonts.inter};
  font-weight: 600;
  font-size: 20px;
`;

export const MetaRow = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

export const LabelSmall = styled.div`
  font-family: ${theme.fonts.inter};
  font-size: 18px;
  color: ${theme.colors.cinza};
`;

export const ActionButton = styled.button`
  width: 130px;
  height: 25px;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  font-family: ${theme.fonts.nunito};
  font-size: 15px;
  background: ${theme.colors.marrom};
  color: white;
  align-self: flex-end;
`;