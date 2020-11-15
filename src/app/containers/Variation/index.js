import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

import { Container } from "./styles";
import { getToken } from "../../actions/helpers/localStorage";
import * as actions from "../../actions/variations";

import { DataText } from "../../components/Text/Datas/index";
import Title from "../../components/Text/Title";

class Variation extends Component {
  getVariation() {
    try {
      const { user } = this.props;

      if (!user) {
        const token = getToken();
        const { payload } = jwt_decode(token);

        const variation_id = this.props.match.params.id;
        return this.props.getVariation(payload.store_id, variation_id);
      }

      const { store_id } = user;

      this.props.getVariation(store_id, 6);
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.getVariation();
  }

  render() {
    if (!this.props.variation) return null;
    const { variation, order } = this.props;

    const { amount } = order.items.find((item) => {
      if (item.variation_id === variation.variationId) {
        return item;
      }
    });
    

    return (
      <Container>
        <div>
          <Title
            type="h4"
            title={`DETALHES DO PRODUTO ID - ${variation.variationId}`}
          />

          <DataText
            className="data-text"
            keys="Nome"
            value={`${variation.variationName}`}
          />
          <DataText
            className="data-text"
            keys="Custo do produto"
            value={`${variation.costPrice}`}
          />
          <DataText
            className="data-text"
            keys="Preço original"
            value={`${variation.salesPrice}`}
          />
          <DataText
            className="data-text"
            keys="Preço de venda"
            value={`${variation.offerPrice}`}
          />
          <DataText
            className="data-text"
            keys="Titulo"
            value={`${variation.title}`}
          />
          <DataText
            className="data-text"
            keys="RefId"
            value={`${variation.refId}`}
          />
          <DataText className="data-text" keys="Qtd" value={`${amount}`} />
          <DataText
            className="data-text"
            keys="Altura"
            value={`${variation.packagedHeight}`}
          />
          <DataText
            className="data-text"
            keys="Largura"
            value={`${variation.packagedWidth}`}
          />
          <DataText
            className="data-text"
            keys="Profundidade"
            value={`${variation.packagedLength}`}
          />
          <DataText
            className="data-text"
            keys="Ean"
            value={`${variation.ean}`}
          />
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  variation: state.variation.variation,
  order: state.order.order,
  user: state.auth.user,
});

export default connect(mapStateToProps, actions)(Variation);
