import React from "react";
import { Provider } from "react-redux";
import store from "./store"
import Orders from './containers/Orders/index'

import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route path={"/"} exact component={Orders} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
