import React from "react";
import { connect } from "react-redux";

import Base from "../Base";
import { Container } from "./styles";
import * as actions from "../../actions";

const base = (Component) => {
  class componentBase extends React.Component {
    componentDidMount() {
      const { getUser, authorized, history, user } = this.props;
      getUser();
      if (!authorized) history.replace("/Login");
    }

    componentDidUpdate(prevProps) {
      const { authorized, history } = this.props;
      // console.log(prevProps);
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
