import React from "react";
import { connect } from "react-redux";

import Base from "../Base";
import { Container } from "./styles";
import * as actions from "../../actions";

const base = (Component) => {
  class componentBase extends React.Component {
    componentDidMount() {
      const { getUser, authorized, history } = this.props;
      getUser();
      if (!authorized) history.replace("Login"); //desfazer em HOC/Base.js
    }

    componentDidUpdate(prevProps) {
      const { authorized, history } = this.props;
      if (!authorized && prevProps.authorized) history.replace("/Login");
    }

    render() {
      return (
        <Container>
          <Base history={this.props.history}>
            <Component {...this.props} />
          </Base>
        </Container>
      );
    }
  }

  const mapStateToProps = (state) => ({
    authorized: state.auth.authorized,
    user: state.auth.user,
  });

  return connect(mapStateToProps, actions)(componentBase);
};

export default base;
