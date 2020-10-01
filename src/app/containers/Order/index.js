import React, { Component } from "react";

import OrderDetails from "./OrderDetails/index";
import DeliveryDetails from "./DeliveryDetails/index";
import PaymentDetails from "./PaymentDetails/index";
import { Container } from "./styles";

export default class Order extends Component {
  render() {
    return (
      <Container>
        <div>
          <div className="OrderDetails flex y-axis">
            <OrderDetails />
          </div>
          <div className="flex x-axis container-update-order">
            <div className=" flex-1 flex x-axis">
              <DeliveryDetails />
            </div>
            <div className="flex-1 flex x-axis">
              <PaymentDetails />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
