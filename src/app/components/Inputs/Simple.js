import React from "react";
import { Container } from "./styles";

const InputSimple = ({ type, label, value, onChange, placeholder, error }) => (
  <Container>
    {error && <small className="small-danger">{error}</small>}
    <div className="Input-simples">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${error ? "input-error" : ""}`}
      />
    </div>
  </Container>
);

export default InputSimple;
