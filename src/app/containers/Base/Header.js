import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex x-axis full-width">
      <div className="flex-1 flex flex-start">
        <a href="/">Ver loja</a>
      </div>
      <div className="flex-1 flex flex-end">
        <Link to="Logout">Sair</Link>
      </div>
    </div>
  );
};

export default Header;
