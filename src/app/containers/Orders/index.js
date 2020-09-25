import React, { Component } from "react";
import Title from "../../components/Text/Title.js";

import Search from "../../components/Inputs/Search";

class Orders extends Component {
  state = {
    search: "",
  };
  searchHandler = (event) => this.setState({ search: event.target.value });

  render() {
    const { search } = this.state;

    return (
      <div className="orders">
        <div className="Card">
          <Title type="h1" title="Orders" />
          <br />
          <Search
            value={search}
            placeholder={"Buscar pedido por cliente"}
            onChange={(event) => this.searchHandler(event)}
          />
          <br />
          {/* <Table />
          <Pagination /> */}
        </div>
      </div>
    );
  }
}

export default Orders;
