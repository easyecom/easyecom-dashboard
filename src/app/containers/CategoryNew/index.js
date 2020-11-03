import React, { Component } from "react";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

import Title from "../../components/Text/Title.js";
import InputSimple from "../../components/Inputs/Simple";
import ButtonSimple from "../../components/Button/Simple";
import SwitchWrapper from "../../components/Inputs/SwitchWrapper/index";

import { Container, ContainerHead, ContainerInput } from "./styles";
import { getToken } from "../../actions/helpers/localStorage";
import * as actions from "../../actions/categories";

class CategoryNew extends Component {
  state = {
    categoryName: "",
    description: "",
    isActive: true,
    refId: "",
    products: [],
    erros: {},
    warn: null,
    changeWrapper: false,
  };

  saveCategory() {
    const { user } = this.props;

    if (!user) {
      const token = getToken();
      const { payload } = jwt_decode(token);

      return this.props.saveCategory(this.state, payload.store_id, (error) => {
        this.setState({
          warn: !error,
          message: error
            ? toast.error(error.message)
            : toast.success("Categoria adcionada com sucesso"),
        });
      });
    }

    const { store_id } = user;

    this.props.saveCategory(this.state, store_id);
  }

  // onChangeWrapper = (field) => this.setState({ [field]: !this.state[field] });

  renderHead() {
    // const { categoryName } = this.state;
    return (
      <ContainerHead>
        <div className="flex">
          <div className="flex-1 flex">
            <Title type="h1" title={"Nova Categoria"} />
          </div>
          <div className="flex-1 flex flex-end">
            <strong>Categoria desativada &nbsp; </strong>{" "}
            <SwitchWrapper onChange={this.onChangeWrapper} />
          </div>
        </div>
      </ContainerHead>
    );
  }

  onChangeInput = (field, value) => this.setState({ [field]: value });

  renderDatas() {
    const {
      categoryName,
      description,
      // isActive,
      refId,
      // products,
      erros,
    } = this.state;

    return (
      <ContainerInput>
        <div className="card-input">
          <div>
            <p>Categoria</p>
            <InputSimple
              name="categoryName"
              label="Name"
              // placeholder={placeholder}
              type=""
              value={categoryName}
              erros={erros.categoryName}
              onChange={(evento) =>
                this.onChangeInput("categoryName", evento.target.value)
              }
            />
          </div>
          <div>
            <p>Descrição da categoria</p>
            <InputSimple
              name="description"
              label="Description"
              value={description}
              erros={erros.description}
              onChange={(evento) =>
                this.onChangeInput("description", evento.target.value)
              }
            />
          </div>
          <div>
            <p>Refid</p>
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
          <div className="btn">
            <ButtonSimple
              type="component-button"
              onClick={() => this.saveCategory()}
              label="Salvar"
            />
          </div>
        </div>
      </ContainerInput>
    );
  }

  render() {
    return (
      <Container>
        <div className="new-category">
          <div className="card">
            {this.renderHead()}
            <div className="flex x-axis ">
              {this.renderDatas()}
              {/* <div className=""></div> */}
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
