import React from "react";

import Header from "./Header/index";
import Menu from "./Menu/index";
import { Container } from "./styles";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="flex x-axis full-height">
        <div className="flex y-axis ">
          <Menu history={this.props.history} />
        </div>
        <div className="flex y-axis full-width">
          <div className="flex x-axis">
            <Header />
          </div>
          <Container>
            <div className="flex full-height">{this.props.children}</div>
          </Container>
        </div>
      </div>
    );
  }
}

export default Dashboard;
