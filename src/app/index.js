import React, { Component } from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import store from "./store";

import base from "./containers/HOC/Base";

import { initApp } from "../app/actions";

import Orders from "./containers/Orders";
import OrderDetails from "./containers/Order";
import Login from "./containers/Login";

class App extends Component {
  componentDidMount() {
    initApp();
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route path={"/"} exact component={base(Orders)} />
            <Route path={"/Pedido"} exact component={base(OrderDetails)} />
            <Route path={"/login"} exact component={Login} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
