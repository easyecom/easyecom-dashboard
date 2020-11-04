import React, { Component } from "react";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";
import moment from "moment";

import Title from "../../components/Text/Title.js";
import Search from "../../components/Inputs/Search/index";
import Table from "../../components/Table/Simple";
import Pagination from "../../components/Pagination/Simple";

import { Container } from "./styles";
import { getToken } from "../../actions/helpers/localStorage";
import * as actions from "../../actions/orders";

class Orders extends Component {
  state = {
    search: "",
    atual: 0,
    limit: 10,
  };

  getOrder() {
    try {
      const { atual, limit } = this.state;
      const { user } = this.props;

      if (!user) {
        const token = getToken();
        const { payload } = jwt_decode(token);

        return this.props.getOrders(atual, limit, payload.store_id);
      }

      const { store_id } = user;

      this.props.getOrders(atual, limit, store_id);
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    // debugger;
    this.getOrder();
  }

  componentDidUpdate() {
    this.props.clearOrder();
  }

  onChangeSearch = (event) => this.setState({ search: event.target.value });

  // changeAtualNumber = (atual) =>
  //   this.setState({ atual }, () => {
  //     this.getOrder();
  //   });

  render() {
    const { search } = this.state;
    const { orders } = this.props;
    const datas = [];

    (orders || []).forEach((item) => {
      datas.push({
        "ID PEDIDO": item.Id,
        CLIENTE: item.customer.userName,
        TOTAL: "R$ 50,00",
        DATA: moment(item.created_at).format("DD/MM/YYYY"),
        STATUS: "aguardando pagamento",
        buttonDetails: `/Pedido/${item.Id}`,
      });
    });

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
              total={1}
              limit={this.state.limit}
              // onClick={(atualNumberPage) =>
              //   this.changeAtualNumber(atualNumberPage)
              // }
            />
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.order.orders,
  user: state.auth.user,
});

export default connect(mapStateToProps, actions)(Orders);
