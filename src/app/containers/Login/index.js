import React, { Component } from "react";
import Signin from "../../components/Signin/index";
import Signup from "../../components/Signup/index";
import { Container } from "./styles";

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
            {/* <img src="./static/logo.png" className="logo" /> */}
            {/* <Title type="h1" title="EASYECOM PLATAFORM" /> */}
            <div className="login-cadastro">
              <button
                onClick={this.active}
                className={`${this.state.on ? "button-active" : ""}`}
              >
                Acessar dashboard
              </button>
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
