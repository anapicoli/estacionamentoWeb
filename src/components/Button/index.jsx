// src/components/Button/index.jsx
import React from "react";
import { ButtonStyled } from "./style";

export default function Button({ children, onClick, type = "button", variant = "primary", styleProps }) {
  return (
    <ButtonStyled onClick={onClick} type={type} variant={variant} styleProps={styleProps}>
      {children}
    </ButtonStyled>
  );
}