import React, { Component } from "react";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

import Title from "../../components/Text/Title.js";
import InputSimple from "../../components/Inputs/Simple";
import ButtonSimple from "../../components/Button/Simple";
import SwitchWrapper from "../../components/Inputs/SwitchWrapper/index";

import { Container, ContainerHead, ContainerInput } from "./styles";
import { getToken } from "../../actions/helpers/localStorage";
import * as actions from "../../actions/products";

class productNew extends Component {
  state = {
    productName: "",
    description: "",
    isActive: true,
    refId: "",
    products: [],
    erros: {},
    warn: null,
    changeWrapper: false,
  };

  saveProduct() {
    const { user } = this.props;

    if (!user) {
      const token = getToken();
      const { payload } = jwt_decode(token);

      return this.props.saveProduct(this.state, payload.store_id, (error) => {
        this.setState({
          warn: !error,
          message: error ? error.message : "Produto adcionada com sucesso",
        });
      });
    }

    const { store_id } = user;

    this.props.saveProduct(this.state, store_id);
  }

  // onChangeWrapper = (field) => this.setState({ [field]: !this.state[field] });

  renderHead() {
    // const { productName } = this.state;
    return (
      <ContainerHead>
        <div className="flex">
          <div className="flex-1 flex">
            <Title type="h1" title={"Novo produto"} />
          </div>
          <div className="flex-1 flex flex-end">
            <strong>Produto desativada &nbsp; </strong>{" "}
            <SwitchWrapper onChange={this.onChangeWrapper} />
          </div>
        </div>
      </ContainerHead>
    );
  }

  onChangeInput = (field, value) => this.setState({ [field]: value });

  renderDatas() {
    const {
      productName,
      description,
      refId,
      descriptionShort,
      keyWords,
      mainCategory,
      categoryId,
      brand_id,
      sku,
      title,
      isActive,
      erros,
    } = this.state;
    return (
      <ContainerInput>
        <div className="card-input">
          <div>
            <p>Produto</p>
            <InputSimple
              name="productName"
              label="Name"
              // placeholder={placeholder}
              type=""
              value={productName}
              erros={erros.productName}
              onChange={(evento) =>
                this.onChangeInput("productName", evento.target.value)
              }
            />
          </div>
          <div>
            <p>Descrição curta</p>
            <InputSimple
              name="descriptionShort"
              label="descriptionShort"
              value={descriptionShort}
              erros={erros.descriptionShort}
              onChange={(evento) =>
                this.onChangeInput("descriptionShort", evento.target.value)
              }
            />
          </div>
          <div>
            <p>Descrição longa</p>
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
            <div>
              <p>Palavras Chave</p>
              <InputSimple
                name="keyWords"
                label="Name"
                // placeholder={placeholder}
                type=""
                value={keyWords}
                erros={erros.keyWords}
                onChange={(evento) =>
                  this.onChangeInput("keyWords", evento.target.value)
                }
              />
            </div>
            <div>
              <p>Categorias</p>

              <select id="categories principal">
                <option value="Tenis">Tenis</option>
                <option value="Bermudas">Bermudas</option>
                <option value="Calças">Calças</option>
                <option value="Camisetas">Camisetas</option>
              </select>
            </div>
            <div>
              <p>Categoria principal</p>

              <select id="categories principal">
                <option value="Tenis">Tenis</option>
                <option value="Bermudas">Bermudas</option>
                <option value="Calças">Calças</option>
                <option value="Camisetas">Camisetas</option>
              </select>
            </div>
            <div>
              <p>Marca do produto</p>

              <select id="categories principal">
                <option value="Tenis">Adidas</option>
                <option value="Bermudas">Nike</option>
                <option value="Calças">Volcon</option>
                <option value="Camisetas">qix</option>
              </select>
            </div>
            <div>
              <p>Descrição Curta</p>
              <InputSimple
                name="descriptionShort"
                label="Name"
                // placeholder={placeholder}
                type=""
                value={descriptionShort}
                erros={erros.descriptionShort}
                onChange={(evento) =>
                  this.onChangeInput("descriptionShort", evento.target.value)
                }
              />
            </div>
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
              onClick={() => this.saveProduct()}
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
        <div className="new-product">
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
  products: state.category.products,
  user: state.auth.user,
});

export default connect(mapStateToProps, actions)(productNew);
