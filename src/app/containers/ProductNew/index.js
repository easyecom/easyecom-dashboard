// buscar categoria e marca para passar no options

import React, { Component, useMemo } from "react";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

import Title from "../../components/Text/Title.js";
import InputSimple from "../../components/Inputs/Simple";
import ButtonSimple from "../../components/Button/Simple";
import SwitchWrapper from "../../components/Inputs/SwitchWrapper/index";

import { Container, ContainerTitle, ContainerInput } from "./styles";
import { getToken } from "../../actions/helpers/localStorage";
import * as actions from "../../actions/products";

class productNew extends Component {
  state = {
    productName: "",
    description: "",
    refId: "",
    products: [],
    erros: {},
    warn: null,
    isActive: false,
    images: null,
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

  onIsActive = () => this.setState({ isActive: !this.state.isActive });

  renderHead() {
    return (
    <ContainerTitle >
        <div className="flex">
        <div>
          <Title type="h1" title={"Novo produto"} />
        </div>
        <div className="flex-1 flex flex-end">
          <strong>
            {this.state.isActive == true ? "ativo" : "inativo"}
            &nbsp;{" "}
          </strong>{" "}
          <SwitchWrapper onChange={this.onIsActive} />
        </div>
      </div>
    </ContainerTitle>
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

    const camera = "";

    return (
      <ContainerInput>
        <div className="card-input">
          <div className="row-1">
            <div className="name-title">
              <InputSimple
                name="productName"
                label="Name"
                placeholder={"Nome produto"}
                type="text"
                value={productName}
                erros={erros.productName}
                onChange={(evento) =>
                  this.onChangeInput("productName", evento.target.value)
                }
              />
              <InputSimple
                name="Titulo"
                label="Name"
                placeholder={"Titulo"}
                type="text"
                value={refId}
                erros={erros.refId}
                onChange={(evento) =>
                  this.onChangeInput("refId", evento.target.value)
                }
              />
            </div>
            <div className="text-areas">
              <div className="short-description">
                <label>Descrição curta</label>
                <div>
                  <textarea required=""></textarea>
                </div>
              </div>

              <div className="long-description">
                <label>Descrição longa</label>
                <div>
                  <textarea required=""></textarea>
                </div>
              </div>
            </div>
            <div className="boxOptions">
              <div className="box">
                <p>Categorias</p>
                <div className="options">
                  <select className="option" id="categories principal">
                    <option value="Tenis">Tenis</option>
                    <option value="Bermudas">Bermudas</option>
                    <option value="Calças">Calças</option>
                    <option value="Camisetas">Camisetas</option>
                  </select>
                </div>
              </div>
              <div className="box">
                <p>Categoria principal</p>
                <div className="options">
                  <select className="option" id="categories principal">
                    <option value="Tenis">Tenis</option>
                    <option value="Bermudas">Bermudas</option>
                    <option value="Calças">Calças</option>
                    <option value="Camisetas">Camisetas</option>
                  </select>
                </div>
              </div>
              <div className="box">
                <p>Marca do produto</p>
                <div className="options">
                  <select className="option" id="categories principal">
                    <option value="Tenis">Adidas</option>
                    <option value="Bermudas">Nike</option>
                    <option value="Calças">Volcon</option>
                    <option value="Camisetas">qix</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="price-stock">
              <div className="box">
                <p>PREÇO</p>
                <div className="item">
                  <InputSimple
                    name="price"
                    label="price"
                    placeholder={"0.00"}
                    type="text"
                    value={refId}
                    erros={erros.refId}
                    onChange={(evento) =>
                      this.onChangeInput("refId", evento.target.value)
                    }
                  />
                </div>
              </div>
              <div className="box">
                <p>PROMOÇÃO</p>
                <div className="item">
                  <InputSimple
                    name="price"
                    label="price"
                    placeholder={"0.00"}
                    type="text"
                    value={refId}
                    erros={erros.refId}
                    onChange={(evento) =>
                      this.onChangeInput("refId", evento.target.value)
                    }
                  />
                </div>
              </div>
              <div className="box">
                <p>ESTOQUE</p>
                <div className="item">
                  <InputSimple
                    name="stock"
                    label="stock"
                    placeholder={"0"}
                    type="text"
                    value={refId}
                    erros={erros.refId}
                    onChange={(evento) =>
                      this.onChangeInput("refId", evento.target.value)
                    }
                  />
                </div>
              </div>
              <div className="box">
                <p>ESTOQUE MIN</p>
                <div className="item">
                  <InputSimple
                    name="stock"
                    label="stock"
                    placeholder={"0"}
                    type="text"
                    value={refId}
                    erros={erros.refId}
                    onChange={(evento) =>
                      this.onChangeInput("refId", evento.target.value)
                    }
                  />
                </div>
              </div>
            </div>
            <div className="dimensions">
              <div className="box">
                <p>ALTURA (cm)</p>
                <div className="item">
                  <InputSimple
                    name="altura"
                    label="altura"
                    placeholder={"0 cm"}
                    type="text"
                    value={refId}
                    erros={erros.refId}
                    onChange={(evento) =>
                      this.onChangeInput("refId", evento.target.value)
                    }
                  />
                </div>
              </div>
              <div className="box">
                <p>LARGURA (cm)</p>
                <div className="item">
                  <InputSimple
                    name="largura"
                    label="largura"
                    placeholder={"0 cm"}
                    type="text"
                    value={refId}
                    erros={erros.refId}
                    onChange={(evento) =>
                      this.onChangeInput("refId", evento.target.value)
                    }
                  />
                </div>
              </div>
              <div className="box">
                <p>COMP (cm)</p>
                <div className="item">
                  <InputSimple
                    name="comprimento"
                    label="comprimento"
                    placeholder={"0 cm"}
                    type="text"
                    value={refId}
                    erros={erros.refId}
                    onChange={(evento) =>
                      this.onChangeInput("refId", evento.target.value)
                    }
                  />
                </div>
              </div>
              <div className="box">
                <p>PESO (kg)</p>
                <div className="item">
                  <InputSimple
                    name="peso"
                    label="peso"
                    placeholder={"0 kg"}
                    type="text"
                    value={refId}
                    erros={erros.refId}
                    onChange={(evento) =>
                      this.onChangeInput("refId", evento.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <p>Enviar imagens</p>
          <div className="images">
            <label id="image">
              <input type="file" />
              <i class="fas fa-camera" alt="Adcionar foto"></i>
            </label>
            <label id="image">
              <input type="file" />
              <i class="fas fa-camera" alt="Adcionar foto"></i>
            </label>
            <label id="image">
              <input type="file" />
              <i class="fas fa-camera" alt="Adcionar foto"></i>
            </label>
            <label id="image">
              <input
                type="file"
                onChange={(e) => this.setState(e.target.files)}
              />
              <i class="fas fa-camera" alt="Adcionar foto"></i>
            </label>
          </div>
          <div className="btn">
            <ButtonSimple
              type="component-button"
              onClick={() => this.saveProduct()}
              label="SALVAR"
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
  user: state.auth.user,
});

export default connect(mapStateToProps, actions)(productNew);
