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
import Clients from "./containers/Clients";
import Login from "./containers/Login";
import Categories from "./containers/Categories";
import CategoryNew from "./containers/CategoryNew";
import Brands from "./containers/Brands";
import BrandNew from './containers/BrandNew'
import Products from "./containers/Products";
import Config from "./containers/Config";
import Perfil from "./containers/Perfil";

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
            <Route path={"/Pedido/:id"} exact component={base(OrderDetails)} />
            <Route path={"/Clientes"} exact component={base(Clients)} />
            <Route path={"/Categorias"} exact component={base(Categories)} />
            <Route path={"/Categoria/Nova"} exact component={base(CategoryNew)} />
            <Route path={"/Marcas"} exact component={base(Brands)} />
            <Route path={"/Marca/Nova"} exact component={base(BrandNew)} />
            <Route path={"/Produtos"} exact component={base(Products)} />
            <Route path={"/Config"} exact component={base(Config)} />
            <Route path={"/Perfil"} exact component={base(Perfil)} />
            <Route path={"/login"} exact component={NoAuth(Login)} />
            <ToastContainer autoClose={5000} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
