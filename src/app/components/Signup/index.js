import React, { Component } from "react";
import Input from "../Inputs/Simple";
import Button from "../Button/Simple";
import { Container } from "./styles";

export default class Login extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    rememberPassword: false,
  };

  handleInput = (field, event) =>
    this.setState({ [field]: event.target.value });

  handleCheckbox = (field) => this.setState({ [field]: !this.state[field] });

  render() {
    const { name, email, password } = this.state;
    return (
      <Container>
        <div>
          <div className="subTitle">
            <p>
              <strong>EASYECOM</strong>, vida digital para o seu negocio
            </p>
          </div>
          <Input
            placeholder={"Name"}
            value={name}
            type="name"
            onChange={(event) => this.handleInput("name", event)}
          />
          <Input
            placeholder={"Email"}
            value={email}
            type="email"
            onChange={(event) => this.handleInput("email", event)}
          />
          <Input
            placeholder={"Password"}
            value={password}
            type="password"
            onChange={(event) => this.handleInput("password", event)}
          />
          <Button type="success" route="/" label="CADASTRAR" />
        </div>
      </Container>
    );
  }
}
