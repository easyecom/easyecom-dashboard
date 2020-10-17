import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

import Title from "../../components/Text/Title.js";
import Search from "../../components/Inputs/Search/index";
import Table from "../../components/Table/Simple";
import Pagination from "../../components/Pagination/Simple";

import { Container } from "./styles";
import { getToken } from "../../actions/helpers/localStorage";
import * as actions from "../../actions/brands";

class Brands extends Component {
  state = {
    search: "",
    atual: 0,
    limit: 10,
  };

  getBrands() {
    try {
      const { atual, limit } = this.state;
      const { user } = this.props;

      if (!user) {
        const token = getToken();
        const { payload } = jwt_decode(token);

        return this.props.getBrands(atual, limit, payload.store_id);
      }

      const { store_id } = user;

      this.props.getBrands(atual, limit, store_id);
    } catch (err) {
      console.log(err);
    }
  }

  renderButtonNew() {
    return (
      <Link className="button" to="/Marca/Nova">
        <i className="fas fa-plus"></i>
        <span>&nbsp; Nova Marca</span>
      </Link>
    );
  }

  componentDidMount() {
    this.getBrands();
  }

  render() {
    const { brands } = this.props;
    const datas = [];

    (brands || []).forEach((item) => {
      datas.push({
        ID: item.brandId,
        MARCA: item.brandName,
        PRODUTOS:
          item.products && item.products[0]
            ? item.products.length
            : item.products,
        ATIVO: item.isActive === true ? "sim" : "não",
        REFID: item.refId ? item.refId : "-",
        // buttonDetails: `/Brands/1`,
      });
    });

    return (
      <Container>
        <div className="brands">
          <div className="Card">
            <div className="cat-box">
              <Title type="h1" title="Marcas" />
              {this.renderButtonNew()}
            </div>
            <br />
            <Table
              header={["ID", "MARCA", "PRODUTOS", "ATIVO", "REFID"]}
              datas={datas}
            />
            <Pagination
              atual={this.state.atual}
              total={10}
              limit={this.state.limit}
              onClick={(atualNumberPage) =>
                this.changeAtualNumber(atualNumberPage)
              }
            />
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  brands: state.brand.brands,
  user: state.auth.user,
});

export default connect(mapStateToProps, actions)(Brands);
