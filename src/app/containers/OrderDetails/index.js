import React, { Component } from "react";

import OrderDetails from "./Order/index";
import Status from "./orderStatus/index";
// import PaymentDetails from "./Payment/index";
import { Container } from "./styles";

import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import { getToken } from "../../actions/helpers/localStorage";
import * as actions from "../../actions/orders";

class Order extends Component {
  getOrder() {
    try {
      const token = getToken();
      const { payload } = jwt_decode(token);

      const order_id = this.props.match.params.id;
      return this.props.getOrder(payload.store_id, order_id);
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    console.log("1");
    this.props.clearOrder();
    this.getOrder();
  }

  componentDidUpdate() {
    console.log("2");
    this.props.clearOrder();
  }

  render() {
    return (
      <Container>
        <div>
          <div className="OrderDetails flex y-axis">
            <OrderDetails />
          </div>
          <div className="flex x-axis container-update-order">
            <div className=" flex-1 flex x-axis">
              <Status />
            </div>
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

export default connect(mapStateToProps, actions)(Order);

{
  /* <div className=" flex-1 flex x-axis">
              <DeliveryDetails />
            </div> */
}
{
  /* <div className="flex-1 flex x-axis">
              <PaymentDetails />
            </div> */
}
