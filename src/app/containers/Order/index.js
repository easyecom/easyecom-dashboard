import React, { Component } from "react";

import OrderDetails from "./OrderDetails";
import DeliveryDetails from "./DeliveryDetails";
import PaymentDetails from "./PaymentDetails";

export default class Order extends Component {
  render() {
    return (
      <div>
        <div className="OrderDetails flex y-axis">
          <OrderDetails />
        </div>
        <div className="flex x-axis">
          <div className=" flex-1 flex x-axis">
            <DeliveryDetails />
          </div>
          <div className="flex-1 flex x-axis">
            <PaymentDetails />
          </div>
        </div>
      </div>
    );
  }
}
