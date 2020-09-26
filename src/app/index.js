import React from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import store from "./store";

import base from "./containers/HOC/Base";

import Orders from "./containers/Orders";
import Login from "./containers/Login";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route path={"/"} exact component={base(Orders)} />
          <Route path={"/login"} exact component={Login} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
