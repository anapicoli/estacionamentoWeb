import { ButtonStyled } from "./style";

export default function Button({ children, onClick, type = "button" }) {
  return <ButtonStyled onClick={onClick} type={type}>{children}</ButtonStyled>;
}