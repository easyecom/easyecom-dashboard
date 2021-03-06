// buscar categoria e marca para passar no options

import React, { Component } from "react";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

import Title from "../../components/Text/Title.js";
import InputSimple from "../../components/Inputs/Simple";
import ButtonSimple from "../../components/Button/Simple";
import SwitchWrapper from "../../components/Inputs/SwitchWrapper/index";

import { Container, ContainerTitle, ContainerInput } from "./styles";
import { getToken } from "../../actions/helpers/localStorage";
import { saveProducts } from "../../actions/createProduct";

class productNew extends Component {
  state = {
    productName: "",
    title: "",
    offerPrice: 0.0,
    salesPrice: 0.0,
    quantity: 0,
    isActive: true,
    mainCategory: 1,
    categoryId: [1],
    brand_id: 1,
    sku: 1,
    image_1: null,
    previewImage1: null,
    image_2: null,
    previewImage2: null,
    image_3: null,
    previewImage3: null,
    image_4: null,
    previewImage4: null,
    erros: {},
    warn: null,
    message: null,
  };

  imageHandler_1(e) {
    this.setState({ image_1: e.target.files[0] });

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ previewImage1: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  imageHandler_2(e) {
    this.setState({ image_2: e.target.files[0] });

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ previewImage2: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  imageHandler_3(e) {
    this.setState({ image_3: e.target.files[0] });

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ previewImage3: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  imageHandler_4(e) {
    this.setState({ image_4: e.target.files[0] });

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ previewImage4: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  async saveProduct() {
    const { user } = this.props;

    if (!user) {
      const token = getToken();
      const { payload } = jwt_decode(token);

      const res = await saveProducts(this.state, payload.store_id);
      if (res) {
        console.log(res);

        return this.setState({
          message: toast.success("Produto adcionada com sucesso"),
        });
      }
    }

    const { store_id } = user;

    this.props.saveProducts(this.state, store_id);
    toast.success("Produto adcionada com sucesso");
  }

  onIsActive = () => this.setState({ isActive: !this.state.isActive });

  renderHead() {
    return (
      <ContainerTitle>
        <div className="flex">
          <div>
            <Title type="h1" title={"Novo produto"} />
          </div>
          <div className="flex-1 flex flex-end">
            <strong>
              {this.state.isActive === true ? "ativo" : "inativo"}
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
      descriptionShort,
      description,
      mainCategory,
      categoryId,
      brand_id,
      isActive,
      offerPrice,
      salesPrice,
      quantity,
      title,
      previewImage1,
      previewImage2,
      previewImage3,
      previewImage4,
      erros,
    } = this.state;

    // fazer função para renderizar as imagens

    return (
      <ContainerInput>
        <div className="card-input">
          <div className="row-1">
            <div className="name-title">
              <InputSimple
                name="productName"
                label="productName"
                placeholder={"Nome produto. Ex. (Smartphone samsung)"}
                type="text"
                value={productName}
                erros={erros}
                onChange={(evento) =>
                  this.onChangeInput("productName", evento.target.value)
                }
              />
              <InputSimple
                name="Titulo"
                label="Name"
                placeholder={
                  "Titulo da variação. Ex. (Smartphone samsung galaxy vermelho 32GB)"
                }
                type="text"
                value={title}
                erros={erros.title}
                onChange={(evento) =>
                  this.onChangeInput("title", evento.target.value)
                }
              />
            </div>
            <div className="text-areas">
              <div className="short-description">
                {/* <label>Descrição curta</label> */}
                <div>
                  <textarea
                    required=""
                    placeholder={
                      "Descrição curta. Ex. (Smartphone Samsung Galaxy A01 Core 32GB Vermelho - Processador Quad-Core 2GB RAM Câm.8MP + Selfie 5MP)"
                    }
                  ></textarea>
                </div>
              </div>

              <div className="long-description">
                {/* <label>Descrição longa</label> */}
                <div>
                  <textarea
                    required=""
                    placeholder={
                      "Descrição longa. Ex. (Tenha uma solução para o seu dia a dia sem deixar nada para trás com o Galaxy A01 Core da Samsung. Realize fotos especiais e únicas com a câmera de 8MP na traseira. Divirta-se e compartilhe seus momentos especiais ao fotografar com a câmera de selfie de 5MP. A tela de 5,3 e resolução HD+ deste smartphone trazem uma experiência de visualização imersiva, seja ao ver seus vídeos, fotos ou simplesmente acessar as redes sociais.)"
                    }
                  ></textarea>
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
                    value={salesPrice}
                    erros={erros.salesPrice}
                    onChange={(evento) =>
                      this.onChangeInput("salesPrice", evento.target.value)
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
                    value={offerPrice}
                    erros={erros.offerPrice}
                    onChange={(evento) =>
                      this.onChangeInput("offerPrice", evento.target.value)
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
                    value={quantity}
                    erros={erros.quantity}
                    onChange={(evento) =>
                      this.onChangeInput("quantity", evento.target.value)
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
                    value={title}
                    erros={erros.title}
                    onChange={(evento) =>
                      this.onChangeInput("title", evento.target.value)
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
                    value={title}
                    erros={erros.title}
                    onChange={(evento) =>
                      this.onChangeInput("title", evento.target.value)
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
                    value={title}
                    erros={erros.title}
                    onChange={(evento) =>
                      this.onChangeInput("title", evento.target.value)
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
                    value={title}
                    erros={erros.title}
                    onChange={(evento) =>
                      this.onChangeInput("title", evento.target.value)
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
                    value={title}
                    erros={erros.title}
                    onChange={(evento) =>
                      this.onChangeInput("title", evento.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <p>Enviar imagens</p>
          <div className="images">
            <label id="image">
              <input
                type="file"
                multiple
                alt="Adcionar foto"
                className=""
                onChange={(e) => this.imageHandler_1(e)}
              />
              <img
                src={previewImage1 ? previewImage1 : null}
                alt=""
                id="img"
                className="img"
                width={`${previewImage1} ? "140" : null`}
                height={previewImage1 ? "140" : null}
              />
              {previewImage1 ? null : <i class="fas fa-camera"></i>}
            </label>
            <label id="image">
              <input
                type="file"
                alt="Adcionar foto"
                className=""
                onChange={(e) => this.imageHandler_2(e)}
              />
              <img
                src={previewImage2 ? previewImage2 : null}
                alt=""
                id="img"
                className="img"
                width={`${previewImage2} ? "140" : null`}
                height={previewImage2 ? "140" : null}
              />
              {previewImage2 ? null : <i class="fas fa-camera"></i>}
            </label>
            <label id="image">
              <input
                type="file"
                alt="Adcionar foto"
                className=""
                onChange={(e) => this.imageHandler_3(e)}
              />
              <img
                src={previewImage3 ? previewImage3 : null}
                alt=""
                id="img"
                className="img"
                width={`${previewImage3} ? "140" : null`}
                height={previewImage3 ? "140" : null}
              />
              {previewImage3 ? null : <i class="fas fa-camera"></i>}
            </label>
            <label id="image">
              <input
                type="file"
                alt="Adcionar foto"
                className=""
                onChange={(e) => this.imageHandler_4(e)}
              />
              <img
                src={previewImage4 ? previewImage4 : null}
                alt=""
                id="img"
                className="img"
                width={`${previewImage4} ? "140" : null`}
                height={previewImage4 ? "140" : null}
              />
              {previewImage4 ? null : <i class="fas fa-camera"></i>}
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
  saveProduct: state.saveProduct.product,
});

export default connect(mapStateToProps)(productNew);
