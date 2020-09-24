import React from "react";

const Title = ({ type, title }) => {
  switch (type) {
    case "h1":
    default:
      return <h1 className="Title">{title}</h1>;
  }
};

export default Title;
