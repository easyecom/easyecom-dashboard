import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    route: "/",
    icone: <i className="fas fa-copy" />,
    title: "Pedidos",
  },
  {
    route: "/users",
    icone: <i className="fas fa-users" />,
    title: "Clients",
  },
  {
    route: "/categories",
    icone: <i className="fas fa-clone" />,
    title: "categories",
  },
  {
    route: "/brands",
    icone: <i className="fas fa-bookmark" />,
    title: "brands",
  },
  {
    route: "/products",
    icone: <i className="fas fa-boxes" />,
    title: "products",
  },
  {
    route: "/config",
    icone: <i className="fas fa-cog" />,
    title: "config",
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
    <div className="items-wrapper">
      {items.map((item, index) => {
        return (
          <Link to={item.route} key={index}>
            <div
              className={`menu-items ${
                currentLocation === item.route ? "menu-item-active" : ""
              } flex x-axis`}
            >
              <div className="flex-1 flex flex-center">{item.icone}</div>
              {open && (
                <div className="flex-2 flex flex-start">
                  <span>{item.title}</span>
                </div>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MainsListItems;
