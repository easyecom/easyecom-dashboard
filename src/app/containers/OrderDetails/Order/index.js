import React, { Component } from "react";

import Title from "../../../components/Text/Title";

import ButtonSimple from "../../../components/Button/Simple";
import TableSimple from "../../../components/Table/Simple";
import { DataText } from "../../../components/Text/Datas/index";
import { Header, Client, Cart, Delivery, Payment, Container } from "./styles";

import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import { getToken } from "../../../actions/helpers/localStorage";
import * as actions from "../../../actions/orders";

class OrderDetails extends Component {
  renderHeader() {
    if (!this.props.order) return null;
    const { order } = this.props;
    // console.log(order);

    return (
      <Header>
        <div className="container flex flex-start ">
          <div className="order-details-title">
            <Title type="h2" title={`Pedido - ${order.Id}`} />
          </div>
          <div className="button-cancel">
            <ButtonSimple
              type="danger"
              label="CANCELAR"
              onClick={() => alert("Pedido cancelado")}
            />
          </div>
        </div>
      </Header>
    );
  }

  renderClientData() {
    if (!this.props.order) return null;
    const { customer } = this.props.order;
    console.log(customer);
    return (
      <Container>
        <Client>
          <div>
            <div>
              <Title type="h4" title="DADOS DO CLIENTE" />
              <DataText
                className="data-text"
                keys="Nome"
                value={`${customer.userName}`}
              />
              <DataText
                keys="Email"
                value={`${customer.email ? customer.email : ""}`}
              />
              <DataText keys="CPF" value={`${customer.cpf}`} />
              <DataText
                keys="Telefone"
                value={`${customer.phone ? customer.phone : ""}`}
              />
              <DataText
                keys="Data de nascimento"
                value={`${customer.dateOfBirth}`}
              />
            </div>
          </div>
        </Client>
        <Delivery>
          <div>
            <div>
              <Title type="h4" title="DADOS DE ENTREGA" />
              <DataText
                keys="Endereço"
                value={`${
                  customer.address.street ? customer.address.street : ""
                }`}
              />
              <DataText
                keys="Bairro"
                value={`${
                  customer.address.neighborhood
                    ? customer.address.neighborhood
                    : ""
                }`}
              />
              <DataText
                keys="Cidade"
                value={`${customer.address.city ? customer.address.city : ""}`}
              />
              <DataText
                keys="Estado"
                value={`${
                  customer.address.state ? customer.address.state : ""
                }`}
              />
              <DataText
                keys="CEP"
                value={`${
                  customer.address.zipcode ? customer.address.zipcode : ""
                }`}
              />
            </div>
          </div>
        </Delivery>
      </Container>
    );
  }

  renderCartData() {
    if (!this.props.order) return null;
    const { items } = this.props.order;

    let datas = [];

    (items || []).forEach((item) => {
      const priceTotal = item.salesPrice * item.amount;

      datas.push({
        Produto: item.name,
        Quantidade: item.amount,
        "Preço Und": item.salesPrice,
        "Preço total": parseFloat(priceTotal).toFixed(2),
        buttonDetails: `/Pedido/${item.Id}`,
      });
    });

    return (
      <Cart>
        <div>
          <div>
            <Title type="h4" title="CARRINHO" />
            <TableSimple
              header={["Produto", "Quantidade", "Preço Und", "Preço total"]}
              datas={datas}
            />
          </div>
        </div>
      </Cart>
    );
  }

  renderPaymentData() {
    return (
      <Payment>
        <div>
          <div>
            <Title type="h4" title="DADOS DE PAGAMENTO" />
            <DataText keys="Taxa de entrega" value="R$ 10,00" />
            <DataText keys="Valor pedido" value="R$ 45,90" />
            <DataText keys="Valor total" value="R$ 55,90" />
            <DataText keys="Forma de pagamento" value="BOLETO" />
          </div>
        </div>
      </Payment>
    );
  }

  getOrder() {
    try {
      const token = getToken();
      const { payload } = jwt_decode(token);

      return this.props.getOrder(payload.store_id);
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.getOrder();
  }

  render() {
    return (
      <div>
        <div className="Order-details flex y-axis">{this.renderHeader()}</div>
        <div className="Order-details">{this.renderClientData()}</div>
        {/* <div className="Order-details ">{this.renderDeliveryData()}</div> */}
        <div className="Order-details">{this.renderCartData()}</div>
        <div className="Order-details">{this.renderPaymentData()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.order.order,
  user: state.auth.user,
});

export default connect(mapStateToProps, actions)(OrderDetails);
