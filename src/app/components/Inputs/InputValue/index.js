import React, { Component } from "react";
import { Tracking } from "./styles";

class InputValue extends Component {
  state = {
    value: this.props.value,
    form: false,
  };

  onChange = (event) => this.setState({ value: event.target.value });

  toggleForm = () =>
    this.setState({ form: !this.state.form, value: this.props.value });

  handleSubmit(value) {
    this.props.handleSubmit(value);
    this.toggleForm();
  }

  renderForm() {
    const { value } = this.state;
    return (
      <div className="Input-value input-open-value">
        <div>
          <input
            value={value}
            onChange={this.onChange}
            name={this.props.name}
          />
        </div>
        <div>
          <div onClick={() => this.handleSubmit(value)}>
            <i className="fas fa-check" />
          </div>
          <div>
            <i className="fas fa-times" />
          </div>
        </div>
      </div>
    );
  }

  renderValue() {
    const { value, label } = this.props;
    return (
      <Tracking>
        <label>{label}</label>
        <div className="Input-Value">
          <span>{value}</span>
          <div onClick={() => this.toggleForm()}>
            <i className="fas fa-edit" />
          </div>
        </div>
      </Tracking>
    );
  }

  render() {
    const { form } = this.state;
    if (form) return this.renderForm();
    return this.renderValue();
  }
}

export default InputValue;
