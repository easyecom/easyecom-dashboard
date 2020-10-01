import React, { Component } from "react";

import Title from "../../../components/Text/Title";
import DinamicList from "../../../components/List/DinamicListSimple/index";
import InputValue from "../../../components/Inputs/InputValue/index";
import { Container } from "./styles";

export default class DeliveryDetails extends Component {
  state = {
    status: [
      "Pronto para manuseio",
      "Preparando entrega",
      "Entregue a transportadora",
    ],
    trackingValue: "PA8767830037",
  };

  onRemoveDinamicList = (index) => {
    let { status } = this.state;

    status = status.filter((item, _index) => _index !== index);

    this.setState({ status });
  };

  onAddDinamicList = (text) => {
    if (!text) return false;

    let { status } = this.state;

    status.push(text);

    this.setState({ status });
  };

  handleSubmit = (value) => {
    this.setState({ trackingValue: value });
    return alert("salvo");
  };

  render() {
    const { status, trackingValue } = this.state;

    return (
      <Container>
        <div>
          <div className="DeliveryDetails flex y-axis"></div>
          <Title type="h4" title="ENTREGA" />

          <DinamicList
            datas={status}
            onRemove={this.onRemoveDinamicList}
            onAdd={this.onAddDinamicList}
          />
          <br />

          <InputValue
            value={trackingValue}
            handleSubmit={(value) => this.handleSubmit(value)}
            name={"trackingValue"}
          />
        </div>
      </Container>
    );
  }
}
