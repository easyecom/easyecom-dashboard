import React from "react";

import Header from "./Header";
import Menu from "./Menu";

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
          <div className="flex full-height">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
