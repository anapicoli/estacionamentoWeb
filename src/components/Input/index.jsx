import { InputStyled } from "./style";

export default function Input({ value, onChange, placeholder, type = "text" }) {
  return <InputStyled type={type} value={value} onChange={onChange} placeholder={placeholder} />;
}