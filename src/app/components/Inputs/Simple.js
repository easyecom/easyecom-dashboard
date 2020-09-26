import React from "react";

const InputSimple = ({ type, label, value, onChange }) => {
  return (
    <div className="Input-simples">
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default InputSimple;
