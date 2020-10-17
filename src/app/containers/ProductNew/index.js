import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

import Title from "../../components/Text/Title.js";
import Table from "../../components/Table/Simple";

import { Container } from "./styles";
import { getToken } from "../../actions/helpers/localStorage";
import * as actions from "../../actions/products";

class ProductNew extends Component {
  state = {};

  get() {
    const { user } = this.props;
    if (!user) {
      const token = getToken();
      const { payload } = jwt_decode(token);

      return this.props.get(payload.store_id);
    }

    const { store_id } = user;

    this.props.get(store_id);
  }

  componentDidMount() {
    this.getProducts();
  }

  renderButtonNew() {
    return (
      <Link className="button" to="/Produto/Novo">
        <i className="fas fa-plus"></i>
        <span>&nbsp; Nova Produto</span>
      </Link>
    );
  }

  render() {
    const { products } = this.props;
    console.log(products, "teste");
    const datas = [];
    (products || []).forEach((item) => {
      datas.push({
        ID: item.productId,
        PRODUTO: item.productName,
        MARCA: item.brandName,
        VARIACOES: item.variations[0] ? item.variations[0].length : "",
        PRECO: item.salesPrice,
        buttonDetails: `/Produto/1`,
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
              header={["ID", "PRODUTO", "VARIACOES", "MARCA", "PRECO"]}
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

export default connect(mapStateToProps, actions)(ProductNew);
