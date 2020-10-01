import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Text/Title";
import Input from "../../components/Inputs/Simple";
import Checkbox from "../../components/Inputs/Checkbox";
import Button from "../../components/Button/Simple";
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
        <div className="Login">
          <div className="image">
            <img />
          </div>
          <div className="card">
            <Title type="h1" title="Easyecom" />
            <p>Faça seu login abaixo</p>
            <Input
              label="E-mail"
              value={email}
              type="email"
              onChange={(event) => this.handleInput("email", event)}
            />
            <Input
              label="Password"
              value={password}
              type="password"
              onChange={(event) => this.handleInput("password", event)}
            />
            <div>
              <div>
                <Checkbox
                  value={rememberPassword}
                  onChange={() => this.handleCheckbox("rememberPassword")}
                  label="Lembra senha?"
                />
              </div>
              <div>
                <Link to="/recuperar-senha">Esqueceu sua senha?</Link>
              </div>
            </div>
            <Button type="success" route="/" label="Entrar" />
          </div>
        </div>
      </Container>
    );
  }
}
