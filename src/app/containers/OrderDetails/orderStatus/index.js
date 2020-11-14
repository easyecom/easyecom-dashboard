import React, { Component } from "react";

import Title from "../../../components/Text/Title";
import { Container } from "./styles";

import { connect } from "react-redux";
// import { getToken } from "../../actions/helpers/localStorage";
// import * as actions from "../../actions/orders";

class OrderDetails extends Component {
  state = {
    status: ["Pronto para manuseio"],
    trackingValue: "PA8767830037",
  };

  render() {
    // const { status, trackingValue } = this.state;

    return (
      <Container>
        <div>
          <div className="title">
            <Title type="h2" title="STATUS DO PEDIDO" />
          </div>

          <div className="status-box">
            <ul className="status">
              <li className="card-on ">
                <p>Aprovação pedido</p>
                <span className="fas fa-calendar-check box flex y-axis" />
              </li>
              <li className="card-on">
                <p>Pagamento</p>
                <span className="fas fa-money-check-alt box flex y-axis" />
              </li>
              <li className="card-on ">
                <p>Faturamento</p>
                <span className="fas fa-file-alt flex y-axis" />
              </li>
              <li className="card-process">
                <p>Manuseio</p>
                <span className="fas fa-people-carry box flex y-axis" />
              </li>
              <li className="card-on card-off">
                <p>Entrega</p>
                <span className="fas fa-truck box flex y-axis" />
              </li>
            </ul>
          </div>

          {/* 
          <InputValue
            value={trackingValue}
            handleSubmit={(value) => this.handleSubmit(value)}
            name={"trackingValue"}
          /> */}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.order.orders,
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(OrderDetails);
