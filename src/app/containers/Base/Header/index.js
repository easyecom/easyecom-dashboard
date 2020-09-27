import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <div className="flex x-axis full-width">
        <div className="flex-1 flex flex-start">
          <a href="/" className="text">Ver loja</a>
        </div>
        <div className="flex-1 flex flex-end">
          <Link to="Logout" className="text">Sair</Link>
        </div>
      </div>
      <hr/>
    </Container>
  );
};

export default Header;
