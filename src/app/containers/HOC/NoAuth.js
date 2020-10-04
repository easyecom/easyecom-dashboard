import React from "react";
import { connect } from "react-redux";

import { Container } from "./styles";
import * as actions from "../../actions";

const NoAuth = (Component) => {
  class componentNoAuth extends React.Component {
    componentDidMount() {
      const { getUser, authorized, history, user } = this.props;
      getUser();
      if (authorized && user.permission.includes("admin")) history.replace("/");
    }

    componentDidUpdate(prevProps) {
      const { authorized, history } = this.props;
      if (!prevProps.authorized && authorized) {
        history.replace("/");
      }
    }

    render() {
      return (
        <Container>
          <Component {...this.props} />
        </Container>
      );
    }
  }

  const mapStateToProps = (state) => ({
    authorized: state.auth.authorized,
    user: state.auth.user,
  });

  return connect(mapStateToProps, actions)(componentNoAuth);
};

export default NoAuth;
