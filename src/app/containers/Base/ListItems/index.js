import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

const items = [
  {
    route: "/",
    icone: <i className="fas fa-copy" />,
    title: "Pedidos",
  },
  {
    route: "/Clientes",
    icone: <i className="fas fa-users" />,
    title: "Clientes",
  },
  {
    route: "/Categorias",
    icone: <i className="fas fa-clone" />,
    title: "Categorias",
  },
  {
    route: "/Marcas",
    icone: <i className="fas fa-bookmark" />,
    title: "Marcas",
  },
  {
    route: "/Produtos",
    icone: <i className="fas fa-boxes" />,
    title: "Produtos",
  },
  {
    route: "/Config",
    icone: <i className="fas fa-cog" />,
    title: "Config",
  },
  {
    route: "/perfil",
    icone: <i className="fas fa-user" />,
    title: "perfil",
  },
];

const MainsListItems = ({ open, history }) => {
  const currentLocation = history.location.pathname;
  return (
    <Container>
      <div className="items-wrapper">
        {items.map((item, index) => {
          return (
            <Link to={item.route} key={index}>
              <div
                className={`menu-items ${
                  currentLocation === item.route ? "menu-item-active" : ""
                } flex z-axis`}
              >
                <div className="flex-1 flex flex-center">{item.icone}</div>
                {open && (
                  <div className="flex-2 flex flex-start">
                    <span className="title">{item.title}</span>
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
};

export default MainsListItems;
