import React, { Component } from "react";
import { connect } from "react-redux";

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
