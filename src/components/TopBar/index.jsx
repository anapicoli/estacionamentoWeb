import { TopBarContainer, LogoImg } from "./style";
import logo from "../../assets/images/logo.png";

export default function TopBar() {
  return (
    <TopBarContainer>
      <LogoImg src={logo} alt="Logo" />
    </TopBarContainer>
  );
}