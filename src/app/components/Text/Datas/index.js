import React from "react";
import {Container} from "./styles";

export const DataText = ({ keys, value }) => {
  return (
    <Container>
      <div>
        <strong>{keys}: &nbsp;</strong>
        <span>{value}</span>
      </div>
    </Container>
  );
};
