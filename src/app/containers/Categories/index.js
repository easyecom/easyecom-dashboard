import React, { Component } from "react";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

import Title from "../../components/Text/Title.js";
import Search from "../../components/Inputs/Search/index";
import Table from "../../components/Table/Simple";
import Pagination from "../../components/Pagination/Simple";

import { Container } from "./styles";
import { getToken } from "../../actions/helpers/localStorage";
import * as actions from "../../actions/categories";

class Categories extends Component {
  state = {
    search: "",
    atual: 0,
    limit: 10,
  };

  getCategories() {
    try {
      const { atual, limit } = this.state;
      const { user } = this.props;

      if (!user) {
        const token = getToken();
        const { payload } = jwt_decode(token);

        return this.props.getCategories(atual, limit, payload.store_id);
      }

      const { store_id } = user;

      this.props.getCategories(atual, limit, store_id);
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.getCategories();
  }

  render() {
    const { search } = this.state;
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
            <Title type="h1" title="Categorias" />
            <br />
            <Search
              value={search}
              placeholder={"Buscar pelo nome da Categoria"}
              onChange={(event) => this.onChangeSearch(event)}
              onClick={() => alert("Pesquisar")}
            />
            <br />
            <Table
              header={["ID", "CATEGORIA", "PRODUTOS", "ATIVO", "REFID"]}
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
  categories: state.category.categories,
  user: state.auth.user,
});

export default connect(mapStateToProps, actions)(Categories);
