// src/components/TopBar/index.jsx
import React from "react";
import { TopBarWrapper, LogoImg, BackButton } from "./style";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import voltar from "../../assets/images/voltar.png";

export default function TopBar({ showBack = true }) {
  const navigate = useNavigate();
  return (
    <TopBarWrapper>
      <LogoImg src={logo} alt="logo" />
      {showBack && (
        <BackButton onClick={() => navigate("/veiculos")}>
          <img src={voltar} alt="voltar" style={{ height: 30 }} />
        </BackButton>
      )}
    </TopBarWrapper>
  );
}