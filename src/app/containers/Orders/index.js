import React, { Component } from "react";
import moment from "moment";

import Title from "../../components/Text/Title.js";

import Search from "../../components/Inputs/Search/index";
import Table from "../../components/Table/Simple";
import Pagination from "../../components/Pagination/Simple";

import { Container } from "./styles";

class Orders extends Component {
  state = {
    search: "",
    atual: 0,
  };

  onChangeSearch = (event) => this.setState({ search: event.target.value });

  changeAtualNumber = (atual) => this.setState({ atual });

  render() {
    const { search } = this.state;

    const datas = [
      {
        "ID PEDIDO": 76567976598,
        CLIENTE: "Malaquias",
        TOTAL: "R$ 77.90",
        DATA: moment().toISOString(),
        STATUS: "aguardando pagamento",
        buttonDetails: "/Pedido",
      },
      {
        "ID PEDIDO": 76567976598,
        CLIENTE: "Joaquina",
        TOTAL: "R$ 240.0",
        DATA: moment().toISOString(),
        STATUS: "pronto para manuseio",
        buttonDetails: "/Pedido",
      },
      {
        "ID PEDIDO": 76567976598,
        CLIENTE: "Tobias",
        TOTAL: "R$ 100.90",
        DATA: moment().toISOString(),
        STATUS: "aguardando pagamento",
        buttonDetails: "/Pedido",
      },
      {
        "ID PEDIDO": 76567976598,
        CLIENTE: "Malaquias",
        TOTAL: "R$ 77.90",
        DATA: moment().toISOString(),
        STATUS: "aguardando pagamento",
        buttonDetails: "/Pedido",
      },
      {
        "ID PEDIDO": 76567976598,
        CLIENTE: "Joaquina",
        TOTAL: "R$ 240.0",
        DATA: moment().toISOString(),
        STATUS: "pronto para manuseio",
        buttonDetails: "/Pedido",
      },
      {
        "ID PEDIDO": 76567976598,
        CLIENTE: "Tobias",
        TOTAL: "R$ 100.90",
        DATA: moment().toISOString(),
        STATUS: "aguardando pagamento",
        buttonDetails: "/Pedido",
      },
      // {
      //   CLIENTE: "Malaquias",
      //   TOTAL: "R$ 77.90",
      //   DATA: moment().toISOString(),
      //   STATUS: "aguardando pagamento",
      //   buttonDetails: "/pedido/34654456",
      // },
      // {
      //   CLIENTE: "Joaquina",
      //   TOTAL: "R$ 240.0",
      //   DATA: moment().toISOString(),
      //   STATUS: "pronto para manuseio",
      //   buttonDetails: "/pedido/34654457",
      // },
      // {
      //   CLIENTE: "Tobias",
      //   TOTAL: "R$ 100.90",
      //   DATA: moment().toISOString(),
      //   STATUS: "aguardando pagamento",
      //   buttonDetails: "/pedido/34654458",
      // },
      // {
      //   CLIENTE: "Malaquias",
      //   TOTAL: "R$ 77.90",
      //   DATA: moment().toISOString(),
      //   STATUS: "aguardando pagamento",
      //   buttonDetails: "/pedido/34654456",
      // },
      // {
      //   CLIENTE: "Joaquina",
      //   TOTAL: "R$ 240.0",
      //   DATA: moment().toISOString(),
      //   STATUS: "pronto para manuseio",
      //   buttonDetails: "/pedido/34654457",
      // },
      // {
      //   CLIENTE: "Tobias",
      //   TOTAL: "R$ 100.90",
      //   DATA: moment().toISOString(),
      //   STATUS: "aguardando pagamento",
      //   buttonDetails: "/pedido/34654458",
      // }
    ];

    return (
      <Container>
        <div className="orders">
          <div className="Card">
            <Title type="h1" title="Pedidos" />
            <br />
            <Search
              value={search}
              placeholder={"Buscar pedido por cliente"}
              onChange={(event) => this.onChangeSearch(event)}
              onClick={() => alert("Pesquisar")}
            />
            <br />
            <Table
              header={["ID PEDIDO", "CLIENTE", "TOTAL", "DATA", "STATUS"]}
              datas={datas}
            />
            <Pagination
              atual={this.state.atual}
              total={120}
              limit={20}
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

export default Orders;
