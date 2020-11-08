import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

import { Container } from "./styles";
import { getToken } from "../../actions/helpers/localStorage";
import * as actions from "../../actions/products";

class Products extends Component {
  render() {
    return <div>Produto</div>;
  }
}

const mapStateToProps = (state) => ({
  products: state.product.products,
  user: state.auth.user,
});

export default connect(mapStateToProps, actions)(Products);
