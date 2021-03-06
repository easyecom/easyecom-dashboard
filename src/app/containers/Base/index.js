import React from "react";

import Header from "./Header/index";
import Menu from "./Menu/index";
import { Container } from "./styles";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="flex x-axis full-height">
        <div className="flex y-axis">
          <Menu history={this.props.history} />
        </div>
        <div className="flex y-axis full-width full-height">
          <div className="flex x-axis">
            <Header handleLogout={this.props.handleLogout} />
          </div>
          <Container>
            <div className="flex full-height">{this.props.children}</div>
          </Container>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Dashboard);
