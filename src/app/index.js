import React, { Component } from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import store from "./store";

import base from "./containers/HOC/Base";
import NoAuth from "./containers/HOC/NoAuth";

import { initApp } from "../app/actions";

import Orders from "./containers/Orders";
import OrderDetails from "./containers/OrderDetails";
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
            <Route path={"/login"} exact component={NoAuth(Login)} />
            <ToastContainer autoClose={5000} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
