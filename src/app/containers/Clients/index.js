import React, { Component } from "react";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";
// import moment from "moment";

import Title from "../../components/Text/Title.js";
import Search from "../../components/Inputs/Search/index";
import Table from "../../components/Table/Simple";
import Pagination from "../../components/Pagination/Simple";

import { Container } from "./styles";
import { getToken } from "../../actions/helpers/localStorage";
import * as actions from "../../actions/clients";

class Clients extends Component {
  state = {
    search: "",
    atual: 0,
    limit: 10,
  };

  getClients() {
    try {
      const { atual, limit } = this.state;
      const { user } = this.props;

      if (!user) {
        const token = getToken();
        const { payload } = jwt_decode(token);

        return this.props.getClients(atual, limit, payload.store_id);
      }

      const { store_id } = user;

      this.props.getClients(atual, limit, store_id);
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.getClients();
  }

  render() {
    const { search } = this.state;
    const { clients } = this.props;

    const datas = [];

    (clients || []).forEach((item) => {
      datas.push({
        "ID CLIENTE": item.Id,
        NAME: item.userName,
        CPF: item.cpf,
        TELEFONE: item.user_id,
        EMAIL: item.email,
        buttonDetails: `/Cliente/1`,
      });
    });

    return (
      <Container>
        <div className="Clients">
          <div className="Card">
            <Title type="h1" title="Clientes" />
            <br />
            <Search
              value={search}
              placeholder={"Buscar aqui pelo nome do cliente"}
              onChange={(event) => this.onChangeSearch(event)}
              onClick={() => alert("Pesquisar")}
            />
            <br />
            <Table
              header={["ID CLIENTE", "NAME", "CPF", "EMAIL", "TELEFONE"]}
              datas={datas}
            />
            <Pagination
              atual={this.state.atual}
              total={10}
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
  clients: state.client.clients,
  user: state.auth.user,
});

export default connect(mapStateToProps, actions)(Clients);
