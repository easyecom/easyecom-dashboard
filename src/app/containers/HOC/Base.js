import React from "react";
import Base from "../Base";
import { Container } from "./styles";

const base = (Component) => {
  return class extends React.Component {
    render() {
      return (
        <Container>
          <Base history={this.props.history}>
            <Component {...this.props} />
          </Base>
        </Container>
      );
    }
  };
};

export default base;
