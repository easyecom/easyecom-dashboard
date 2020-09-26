import React, { Component } from "react";
import moment from "moment";

import Title from "../../components/Text/Title.js";

import Search from "../../components/Inputs/Search";
import Table from "../../components/Table/Simple";
import Pagination from "../../components/Pagination/Simple";

class Orders extends Component {
  state = {
    search: "",
    atual: 0,
  };
  searchHandler = (event) => this.setState({ search: event.target.value });

  changeAtualNumber = (atual) => this.setState({ atual });

  render() {
    const { search } = this.state;

    const datas = [
      {
        Cliente: "Malaquias",
        Total: 77.9,
        Data: moment().toISOString(),
        Status: "aguardando pagamento",
        buttonDetails: "/pedido/34654456",
      },
      {
        Cliente: "Joaquina",
        Total: 240.0,
        Data: moment().toISOString(),
        Status: "pronto para manuseio",
        buttonDetails: "/pedido/34654457",
      },
      {
        Cliente: "Tobias",
        Total: 100.9,
        Data: moment().toISOString(),
        Status: "aguardando pagamento",
        buttonDetails: "/pedido/34654458",
      },
    ];

    return (
      <div className="orders">
        <div className="Card">
          <Title type="h1" title="Orders" />
          <br />
          <Search
            value={search}
            placeholder={"Buscar pedido por cliente"}
            onChange={(event) => this.searchHandler(event)}
            onClick={() => alert("Pesquisar")}
          />
          <br />
          <Table
            header={["Cliente", "Total", "Data", "Status"]}
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
    );
  }
}

export default Orders;
