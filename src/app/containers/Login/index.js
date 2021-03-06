import React, { Component } from "react";
import Signin from "../../components/Signin/index";
import { Container } from "./styles";
import logo from "../../../static/logo.png";

export default class Login extends Component {
  state = {
    on: true,
  };

  active = () => {
    this.setState({ on: !this.state.on });
  };

  render() {
    return (
      <Container>
        <div className="Login">
          <div className="image"></div>
          <div className="card">
            {/* <Title type="h1" title="EASYECOM PLATAFORM" /> */}
            <div className="login-cadastro">
              <img className="logo" src={logo} alt="logo" />
              <button
                onClick={this.active}
                className={`${this.state.on ? "button-active" : ""}`}
              ></button>
              {/* <button
                onClick={this.active}
                className={`${!this.state.on ? "button-active" : ""}`}
              >
                Cadastrar
              </button> */}
            </div>
            {this.state.on && <Signin />}
            {/* {!this.state.on && <Signup />} */}
          </div>
        </div>
      </Container>
    );
  }
}
