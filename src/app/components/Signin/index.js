import React, { Component } from "react";
import { toast } from "react-toastify";

import Input from "../Inputs/Simple";
import Checkbox from "../Inputs/Checkbox";
import Button from "../Button/Simple";
import { Container } from "./styles";
import { api } from "../../config";

import { connect } from "react-redux";
import * as actions from "../../actions";

class Login extends Component {
  state = {
    email: "",
    password: "",
    rememberPassword: true,
    erros: {},
  };

  onChangeInput = (field, event) => {
    this.setState({ [field]: event.target.value });

    this.validate();
  };

  onChangeCheckbox = (field) => this.setState({ [field]: !this.state[field] });

  handleLogin() {
    const { email, password, rememberPassword } = this.state;

    if (!this.validate()) return;

    this.props.handleLogin({ email, password, rememberPassword }, (error) => {
      toast.error(error.message);
    });
  }

  validate() {
    const { email, password } = this.state;

    const erros = {};

    if (!email) erros.email = "Preencha com seu e-mail";
    if (!password) erros.password = "Preencha com sua senha";

    this.setState({ erros });
    return !(Object.keys(erros).length > 0);
  }

  render() {
    const { email, password, rememberPassword, erros } = this.state;
    return (
      <Container>
        <div className="box">
          <div className="subTitle">
            <p>
              Não tem uma conta? <strong>Crie Uma Conta </strong>e teste gratis
              por 30 dias
            </p>
          </div>
          <Input
            placeholder={"Email"}
            error={erros.email}
            value={email}
            type="email"
            onChange={(event) => this.onChangeInput("email", event)}
          />
          <Input
            placeholder={"Password"}
            error={erros.password}
            value={password}
            type="password"
            onChange={(event) => this.onChangeInput("password", event)}
          />
          <div className="checkBox">
            <div>
              <Checkbox
                value={rememberPassword}
                onChange={() => this.onChangeCheckbox("rememberPassword")}
                label="Lembrar senha?"
              />
            </div>
          </div>
          <Button
            type="success"
            label="ENTRAR"
            onClick={() => this.handleLogin()}
          />
          <div>
            <a href={`${api}/recovery`}>
              <small>Esqueceu sua senha?</small>
            </a>
          </div>
        </div>
      </Container>
    );
  }
}

export default connect(null, actions)(Login);
