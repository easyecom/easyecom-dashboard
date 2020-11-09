import React, { Component } from "react";

import Title from "../../../components/Text/Title";

import ButtonSimple from "../../../components/Button/Simple";
import TableSimple from "../../../components/Table/Simple";
import { DataText } from "../../../components/Text/Datas/index";
import {
  Header,
  Client,
  Address,
  Cart,
  Delivery,
  Payment,
  Container,
  PaymentDelivery,
} from "./styles";

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
    const { customer, address } = this.props.order;
// console.log(customer)
    return (
      <Container>
        <Client>
          <div>
            <div>
              <Title type="h4" title="CLIENTE" />
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
        <Address>
          <div>
            <div>
              <Title type="h4" title="ENDEREÇO CLIENTE" />
              <DataText
                keys="Endereço"
                value={`${address.street ? address.street : ""}`}
              />
              <DataText
                keys="Bairro"
                value={`${address.neighborhood ? address.neighborhood : ""}`}
              />
              <DataText
                keys="Cidade"
                value={`${address.city ? address.city : ""}`}
              />
              <DataText
                keys="Estado"
                value={`${address.state ? address.state : ""}`}
              />
              <DataText
                keys="CEP"
                value={`${address.zipcode ? address.zipcode : ""}`}
              />
            </div>
          </div>
        </Address>
      </Container>
    );
  }

  renderCartData() {
    if (!this.props.order) return null;
    const { items } = this.props.order;
    console.log(items);
    let datas = [];

    (items || []).forEach((item) => {
      const priceTotal = item.offerPrice || item.salesPrice * item.amount;

      datas.push({
        Produto: item.name,
        Quantidade: item.amount,
        "Total desc": parseFloat(item.salesPrice - item.offerPrice).toFixed(2),
        "Preço Und": parseFloat(item.offerPrice || item.salesPrice).toFixed(2),
        "Preço total": parseFloat(priceTotal).toFixed(2),
        buttonDetails: `/Variacao/${item.variation_id}`,
      });
    });

    return (
      <Cart>
        <div>
          <div>
            <Title type="h4" title="CARRINHO" />
            <TableSimple
              header={[
                "Produto",
                "Quantidade",
                "Preço Und",
                "Total desc",
                "Preço total",
              ]}
              datas={datas}
            />
          </div>
        </div>
      </Cart>
    );
  }

  renderPaymentData() {
    if (!this.props.order) return null;
    let { shipping, payment, totalItemsValue, address } = this.props.order;
    return (
      <PaymentDelivery>
        <Payment>
          <div>
            <div>
              <Title type="h4" title="DADOS DE PAGAMENTO" />
              <DataText keys="Taxa de entrega" value={`${shipping.cost}`} />
              <DataText
                keys="Valor pedido"
                value={`${parseFloat(totalItemsValue).toFixed(2)}`}
              />
              <DataText
                keys="Valor total"
                value={parseFloat(
                  parseInt(shipping.cost) + parseInt(totalItemsValue)
                ).toFixed(2)}
              />
              <DataText keys="Forma de pagamento" value={payment.paymentForm} />
            </div>
          </div>
        </Payment>
        <Delivery>
          <div>
            <div>
              <Title type="h4" title="ENDEREÇO DE ENTREGA" />
              <DataText
                keys="Endereço"
                value={`${
                  shipping &&
                  shipping.shippingAddress &&
                  shipping.shippingAddress.street
                    ? shipping.shippingAddress.street
                    : address.street
                }`}
              />
              <DataText
                keys="Bairro"
                value={`${
                  shipping &&
                  shipping.shippingAddress &&
                  shipping.shippingAddress.neighborhood
                    ? shipping.shippingAddress.neighborhood
                    : address.neighborhood
                }`}
              />
              <DataText
                keys="Cidade"
                value={`${
                  shipping &&
                  shipping.shippingAddress &&
                  shipping.shippingAddress.city
                    ? shipping.shippingAddress.city
                    : address.city
                }`}
              />
              <DataText
                keys="Estado"
                value={`${
                  shipping &&
                  shipping.shippingAddress &&
                  shipping.shippingAddress.state
                    ? shipping.shippingAddress.state
                    : address.state
                }`}
              />
              <DataText
                keys="CEP"
                value={`${
                  shipping &&
                  shipping.shippingAddress &&
                  shipping.shippingAddress.zipcode
                    ? shipping.shippingAddress.zipcode
                    : address.zipcode
                }`}
              />
            </div>
          </div>
        </Delivery>
      </PaymentDelivery>
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
    // this.getOrder();
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
