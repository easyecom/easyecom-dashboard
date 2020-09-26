import React, { Component } from "react";
import Title from "../../components/Text/Title";

import ButtonSimple from "../../components/Button/Simple";
import TableSimple from "../../components/Table/Simple";
import { DataText } from "../../components/Text/Datas";

export default class OrderDetails extends Component {
  renderHeader() {
    return (
      <div>
        <div>
          <Title type="h2" title="Pedido - Cliente 1 - 04-04-2019" />
        </div>
        <div>
          <ButtonSimple
            type="danger"
            label="CANCELAR PEDIDO"
            onClick={() => alert("Pedido cancelado")}
          />
        </div>
      </div>
    );
  }

  renderClientData() {
    return (
      <div>
        <div>
          <Title type="h4" title="Dados do cliente" />
          <DataText keys="Nome" value="cliente 1" />
          <DataText keys="CPF" value="99999999999" />
          <DataText keys="Telefone" value="11999999999" />
          <DataText keys="Data de nascimento" value="09/09/1999" />
          <hr />
        </div>
      </div>
    );
  }

  renderDeliveryData() {
    return (
      <div>
        <div>
          <Title type="h4" title="Dados do entrega" />
          <DataText keys="Endereço" value="Rua Diomar Ackel 999" />
          <DataText keys="Bairro" value="Pimentas" />
          <DataText keys="Cidade" value="Guarulhos" />
          <DataText keys="Estado" value="São Paulo" />
          <DataText keys="CEP" value="07273-491" />
          <hr />
        </div>
      </div>
    );
  }

  renderPaymentData() {
    return (
      <div>
        <div>
          <Title type="h4" title="Dados de pagamento" />
          <DataText keys="Taxa de entrega" value="R$ 10,00" />
          <DataText keys="Valor pedido" value="R$ 45,90" />
          <DataText keys="Valor total" value="R$ 55,90" />
          <DataText keys="Forma de pagamento" value="BOLETO" />
          <hr />
        </div>
      </div>
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
    ];

    return (
      <div>
        <div>
          <Title type="h4" title="Carrinho" />
          <TableSimple
            header={["Produto", "Preço Und", "Quantidade", "Preço total"]}
            datas={datas}
          />
          <hr />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="Order-details flex y-axis">{this.renderHeader()}</div>
        <div className="Order-details">{this.renderClientData()}</div>
        <div className="Order-details">{this.renderCartData()}</div>
        <div className="Order-details ">{this.renderDeliveryData()}</div>
        <div className="Order-details">{this.renderPaymentData()}</div>
      </div>
    );
  }
}
