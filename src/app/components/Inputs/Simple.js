import React from "react";

const InputSimple = ({ type, value, onChange, placeholder, error }) => (
  <div>
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
  </div>
);

export default InputSimple;
