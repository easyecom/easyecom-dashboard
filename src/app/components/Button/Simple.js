import React from "react";
import { Link } from "react-router-dom";

const Button = ({ type, label, onClick }) => {
  return (
    <div className="Button">
      <button
        onClick={onClick}
        className={`button button-${type || "default"}`}
      >
        {label}
      </button>
    </div>
  );
};

const ButtonSimple = ({ type, route, label, onClick }) => {
  if (route) {
    return (
      <Link to={route}>
        <Button type={type} onClick={onClick} label={label} />
      </Link>
    );
  }
  return <Button type={type} onClick={onClick} label={label} />;
};

export default ButtonSimple;
