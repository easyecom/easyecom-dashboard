import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import jwt_decode from "jwt-decode";
import { getToken } from "../../../actions/helpers/localStorage";

const Header = ({ handleLogout }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    try {
      const token = getToken();

      const { payload } = jwt_decode(token);

      const name = payload.userName.split(" ").slice(0, 1);

      setName(name);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <div className="flex x-axis full-width header-box">
        <div className="flex-1 flex flex-start">
          <a href="/" className="text see-store-header">
            Ver loja
          </a>
        </div>
        <div className="flex-1 flex flex-end">
          <p className="user-name">Olá {name} | </p>
          <div className="logout-store-header">
            <a href="/" onClick={() => handleLogout()} className="text">
              Sair
            </a>
            <i className="fas fa-power-off" />
          </div>
        </div>
      </div>
      {/* <hr color="#cc8400" size="1" width="50%" text-align="left"/> */}
    </Container>
  );
};

export default Header;
