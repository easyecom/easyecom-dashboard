import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

import Title from "../../components/Text/Title.js";
// import Table from "../../components/Table/Simple";
import InputSimple from "../../components/Inputs/Simple";
// import Checkbox from "../../components/Inputs/Checkbox";
import ButtonSimple from "../../components/Button/Simple";

import { Container } from "./styles";
import { getToken } from "../../actions/helpers/localStorage";
import * as actions from "../../actions/categories";

class CategoryNew extends Component {
  state = {
    categoryName: "Smartphone",
    description: "just be",
    isActive: true,
    refId: 12333,
    products: [],
    erros: {},
    warn: null,
  };

  saveCategory() {
    const { user } = this.props;

    if (!user) {
      const token = getToken();
      const { payload } = jwt_decode(token);

      return this.props.saveCategory(this.state, payload.store_id, (error) => {
        this.setState({
          warn: !error,
          message: error ? error.message : "Categoria adcionada com sucesso",
        });
      });
    }

    const { store_id } = user;

    this.props.saveCategory(this.state, store_id);
  }

  renderHead() {
    const { categoryName } = this.state;
    return (
      <div className="flex">
        <div className="flex-1 flex">
          <Title type="h1" title={categoryName || "Nova Categoria"} />
        </div>
        <div className="flex-1 flex flex-end">
          <ButtonSimple onClick={() => this.saveCategory()} label="Salvar" />
        </div>
      </div>
    );
  }

  onChangeInput = (field, value) => this.setState({ [field]: value });

  renderDatas() {
    const { categoryName, description, isActive, refId, products, erros } = this.state;
    return (
      <div className="flex-2">
        <div class="switch__container">
          <input
            id="switch-shadow"
            class="switch switch--shadow"
            type="checkbox"
          />
          <label for="switch-shadow"></label>
        </div>

        {/* <Checkbox
          id="switch-shadow"
          class="switch switch--shadow"
          type="checkbox"
          value={isActive}
          onChange={() => this.onChangeCheckbox("isActive")}
          label="Ativo"
        /> */}
        <InputSimple
          name="categoryName"
          label="Name"
          value={categoryName}
          erros={erros.categoryName}
          onChange={(evento) =>
            this.onChangeInput("categoryName", evento.target.value)
          }
        />
        <InputSimple
          name="description"
          label="Description"
          value={description}
          erros={erros.description}
          onChange={(evento) =>
            this.onChangeInput("description", evento.target.value)
          }
        />
        <InputSimple
          name="refId"
          label="RefId"
          value={refId}
          erros={erros.refId}
          onChange={(evento) =>
            this.onChangeInput("refId", evento.target.value)
          }
        />
      </div>
    );
  }

  render() {
    return (
      <Container>
        <div className="new-category full-width">
          <div className="card">
            {this.renderHead()}
            <div className="flex x-axis">
              {this.renderDatas()}
              <div className="flex-1"></div>
            </div>
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

export default connect(mapStateToProps, actions)(CategoryNew);
