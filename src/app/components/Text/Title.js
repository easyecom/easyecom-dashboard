import React from "react";

const Title = ({ type, title }) => {
  switch (type) {
    case "h4":
      return <h4 className="SubTitle-secund">{title}</h4>;
    case "h3":
      return <h3 className="SubTitle-main">{title}</h3>;
    case "h2":
      return <h2 className="Title-secund">{title}</h2>;
    case "h1":
    default:
      return <h1 className="Title-main">{title}</h1>;
  }
};

export default Title;
