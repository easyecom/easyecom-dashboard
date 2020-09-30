import React, { Component } from "react";
import Title from "../../../components/Text/Title";

import ButtonSimple from "../../../components/Button/Simple";
import TableSimple from "../../../components/Table/Simple";
import { DataText } from "../../../components/Text/Datas";
import { Header, Client, Cart, Delivery, Payment, Container } from "./styles";

export default class OrderDetails extends Component {
  renderHeader() {
    return (
      <Header> 
        <div className="container flex flex-start "> 
          <div className="order-details-title">
            <Title type="h2" title="Pedido - 76567976598" />
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
    return (
      <Container>
        <Client>
          <div>
            <div>
              <Title type="h4" title="DADOS DO CLIENTE" />
              <DataText className="data-text" keys="Nome" value="cliente 1" />
              <DataText keys="CPF" value="99999999999" />
              <DataText keys="Telefone" value="11999999999" />
              <DataText keys="Data de nascimento" value="09/09/1999" />
            </div>
          </div>
        </Client>
        <Delivery>
          <div>
            <div>
              <Title type="h4" title="DADOS DE ENTREGA" />
              <DataText keys="Endereço" value="Rua Diomar Ackel 999" />
              <DataText keys="Bairro" value="Pimentas" />
              <DataText keys="Cidade" value="Guarulhos" />
              <DataText keys="Estado" value="São Paulo" />
              <DataText keys="CEP" value="07273-491" />
            </div>
          </div>
        </Delivery>
      </Container>
    );
  }

  renderCartData() {
    const datas = [
      {
        Produto: "Vans old school",
        "Preço Und": "R$ 270,00",
        Quantidade: "1",
        "Preço total": "R$ 280,00",
      },
      {
        Produto: "Chinelo Havaianas",
        "Preço Und": "R$ 60,00",
        Quantidade: "1",
        "Preço total": "R$ 60,00",
      },
      {
        Produto: "Camiseta Nike",
        "Preço Und": "R$ 120,00",
        Quantidade: "2",
        "Preço total": "R$ 240,00",
      },
    ];

    return (
      <Cart>
        <div>
          <div>
            <Title type="h4" title="CARRINHO" />
            <TableSimple
              header={["Produto", "Preço Und", "Quantidade", "Preço total"]}
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
