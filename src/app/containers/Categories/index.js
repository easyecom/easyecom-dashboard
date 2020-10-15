import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

import Title from "../../components/Text/Title.js";
import Table from "../../components/Table/Simple";

import { Container } from "./styles";
import { getToken } from "../../actions/helpers/localStorage";
import * as actions from "../../actions/categories";

class Categories extends Component {
  state = {};

  getCategories() {
    const { user } = this.props;

    if (!user) {
      const token = getToken();
      const { payload } = jwt_decode(token);

      return this.props.getCategories(payload.store_id);
    }

    const { store_id } = user;

    this.props.getCategories(store_id);
  }

  componentDidMount() {
    this.getCategories();
  }

  renderButtonNew() {
    return (
      <Link className="button" to="/Categoria/Nova">
        <i className="fas fa-plus"></i>
        <span>Nova</span>
      </Link>
    );
  }

  render() {
    const { categories } = this.props;
    const datas = [];

    (categories || []).forEach((item) => {
      datas.push({
        ID: item.categoryId,
        CATEGORIA: item.categoryName,
        PRODUTOS: item.products[0],
        ATIVO: item.isActive === true ? "sim" : "não",
        REFID: item.refId ? item.refId : "-",
        // buttonDetails: `/Cliente/1`,
      });
    });

    return (
      <Container>
        <div className="Categories">
          <div className="Card">
            <div className="cat-box">
              <Title type="h1" title="Categorias" className="cat-box-title" />
              {this.renderButtonNew()}
            </div>
            <br />
            <Table
              header={["ID", "CATEGORIA", "PRODUTOS", "ATIVO", "REFID"]}
              datas={datas}
            />
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.category.categories,
  user: state.auth.user,
});

export default connect(mapStateToProps, actions)(Categories);
