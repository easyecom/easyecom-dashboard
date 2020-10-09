import React, { Component } from "react";
import moment from "moment";

import Title from "../../components/Text/Title.js";

import Search from "../../components/Inputs/Search/index";
import Table from "../../components/Table/Simple";
import Pagination from "../../components/Pagination/Simple";

import { Container } from "./styles";

import { connect } from "react-redux";
import * as actions from "../../actions/orders";

class Orders extends Component {
  state = {
    search: "",
    atual: 0,
    limit: 30,
  };

  getOrder() {
    const { atual, limit } = this.state;

    const { user } = this.props;
    if (!user) return console.log("not have user");

    const { store_id } = user;
    this.props.getOrders(atual, limit, store_id);
  }

  componentDidMount() {
    this.getOrder();
  }

  componentDidUpdate(prevProps) {
    console.log("this.props");
    if (!this.props.user && prevProps.user) this.getOrder();
  }

  onChangeSearch = (event) => this.setState({ search: event.target.value });

  changeAtualNumber = (atual) =>
    this.setState({ atual }, () => {
      this.getOrder();
    });

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
              limit={this.state.limit}
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

const mapStateToProps = (state) => ({
  order: state.order.orders,
  user: state.auth.user,
});

export default connect(mapStateToProps, actions)(Orders);
