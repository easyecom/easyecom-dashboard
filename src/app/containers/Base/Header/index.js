import React from "react";
import { Container } from "./styles";

const Header = ({ handleLogout }) => {
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
          <a href="/" onClick={() => handleLogout()} className="text">
            Sair
          </a>
          <i className="fas fa-power-off" />
        </div>
      </div>
      {/* <hr color="#cc8400" size="1" width="50%" text-align="left"/> */}
    </Container>
  );
};

export default Header;
