import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

import Title from "../../components/Text/Title.js";
import Table from "../../components/Table/Simple";

import { Container } from "./styles";
import { getToken } from "../../actions/helpers/localStorage";
import * as actions from "../../actions/products";

class Products extends Component {
  state = {};

  getProducts() {
    const { user } = this.props;
    if (!user) {
      const token = getToken();
      const { payload } = jwt_decode(token);

      return this.props.getProducts(payload.store_id);
    }

    const { store_id } = user;

    this.props.getProducts(store_id);
  }

  componentDidMount() {
    this.getProducts();
  }

  renderButtonNew() {
    return (
      <Link className="button" to="/Produto-novo">
        <i className="fas fa-plus"></i>
        <span>&nbsp; Novo Produto</span>
      </Link>
    );
  }

  render() {
    const { products } = this.props;
    console.log(products, "products/index 45");

    const datas = [];
    (products || []).forEach((item) => {
      datas.push({
        ID: item.productId,
        PRODUTO: item.productName,
        DESCRIÇÃO: item.descriptionShort,
        MARCA: item.brandName,
        VARIACOES: item.variations ? item.variations.length : "",
        buttonDetails: `/Produto/${item.productId}`,
      });
    });

    return (
      <Container>
        <div className="Products">
          <div className="Card">
            <div className="cat-box">
              <Title type="h1" title="Produtos" className="cat-box-title" />
              {this.renderButtonNew()}
            </div>
            <br />
            <Table
              header={["ID", "PRODUTO", "DESCRIÇÃO", "VARIACOES", "MARCA"]}
              datas={datas}
            />
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.product.products,
  user: state.auth.user,
});

export default connect(mapStateToProps, actions)(Products);
