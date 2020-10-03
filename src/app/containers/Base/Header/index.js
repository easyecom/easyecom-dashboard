import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <div className="flex x-axis full-width header-box">
        <div className="flex-1 flex flex-start">
          <a href="/" className="text see-store-header">
            Ver loja
          </a>
          {/* <i className="fas fa-store" /> */}
        </div>
        <div className="flex-1 flex flex-end logout-store-header">
          <Link to="Login" className="text">
            Sair
          </Link>
          <i className="fas fa-power-off" />
        </div>
      </div>
      {/* <hr color="#cc8400" size="1" width="50%" text-align="left"/> */}
    </Container>
  );
};

export default Header;
