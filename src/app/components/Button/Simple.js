import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

const Button = ({ type, label, onClick }) => {
  return (
    <Container>
      <div className="Button">
        <button
          onClick={onClick}
          className={`button button-${type || "default"}`}
        >
          {label}
        </button>
      </div>
    </Container>
  );
};

const ButtonSimple = ({ type, route, label, onClick }) => {
  if (route) {
    return (
      <Container>
        <Link to={route}>
          <Button className="details-button" type={type} onClick={onClick} label={label} />
        </Link>
      </Container>
    );
  }
  return <Button type={type} onClick={onClick} label={label} />;
};

export default ButtonSimple;
