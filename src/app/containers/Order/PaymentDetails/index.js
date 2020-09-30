import React, { Component } from "react";
import Title from "../../../components/Text/Title";
import DinamicList from "../../../components/List/DinamicListSimple";
import { Container } from "./styles";

export default class PaymentDetails extends Component {
  state = {
    status: ["Aguardando pagamento", "Processando pagamento"],
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

  render() {
    const { status } = this.state;
    return (
      <Container>
        <div>
          <div className="PaymentDetails flex y-axis"></div>
          <Title type="h4" title="PAGAMENTO" />
          <DinamicList
            datas={status}
            onRemove={this.onRemoveDinamicList}
            onAdd={this.onAddDinamicList}
          />
        </div>
      </Container>
    );
  }
}
