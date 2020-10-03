import React from "react";

const InputSimple = ({ type, label, value, onChange, placeholder }) => {
  return (
    <div className="Input-simples">
      {label && <label>{label}</label>}
      <input type={type} value={value} onChange={onChange} placeholder={placeholder}/>
    </div>
  );
};

export default InputSimple;
