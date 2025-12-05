import React from "react";
import { InputWrapper, Label, InputField } from "./style";

export default function Input({ label, placeholder, value, onChange, type = "text", name }) {
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <InputField placeholder={placeholder} value={value} onChange={onChange} type={type} name={name} />
    </InputWrapper>
  );
}