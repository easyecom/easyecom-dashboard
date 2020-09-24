import React from "react";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="flex x-axis">
        <div className="flex y-axis">
          <p>Menu</p>
        </div>
        <div className="flex y-axis">
          <div className="flex x-axis">Barra Topo</div>
          <div className="flex">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
