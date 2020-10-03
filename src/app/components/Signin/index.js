import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "../Inputs/Simple";
import Checkbox from "../Inputs/Checkbox";
import Button from "../Button/Simple";
import { Container } from "./styles";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    rememberPassword: false,
  };

  handleInput = (field, event) =>
    this.setState({ [field]: event.target.value });

  handleCheckbox = (field) => this.setState({ [field]: !this.state[field] });

  render() {
    const { email, password, rememberPassword } = this.state;
    return (
      <Container>
        <div className="box">
          <div className="subTitle">
            <p>
              Não tem uma conta ? <strong>Crie Uma Conta </strong>e teste gratis
              por 30 dias
            </p>
          </div>
          <Input
            // label="E-mail"
            placeholder={"Email"}
            value={email}
            type="email"
            onChange={(event) => this.handleInput("email", event)}
          />
          <Input
            // label="Password"
            placeholder={"Password"}
            value={password}
            type="password"
            onChange={(event) => this.handleInput("password", event)}
          />
          <div className="checkBox">
            <div>
              <Checkbox
                value={rememberPassword}
                onChange={() => this.handleCheckbox("rememberPassword")}
                label="Lembra senha?"
              />
            </div>
          </div>
          <Button type="success" route="/" label="ENTRAR" />
          <div>
            <Link to="/recuperar-senha">Esqueceu sua senha?</Link>
          </div>
        </div>
      </Container>
    );
  }
}
