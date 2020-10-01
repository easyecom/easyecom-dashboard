import React from "react";
import ButtonSimple from "../../Button/Simple";
import InputSimple from "../../Inputs/Simple";
import { Container } from "./styles";

class DinamicListSimple extends React.Component {
  state = { text: "" };

  onChangeInput = (event) => this.setState({ text: event.target.value });

  onAdd() {
    const { text } = this.state;
    this.props.onAdd(text);
    this.setState({ text: "" });
  }

  render() {
    const { datas, onRemove } = this.props;
    const { text } = this.state;
    return (
      <Container>
        <div className="flex y-axis">
          {datas.map((item, index) => {
            return (
              <div>
                <div key={index} className="flex x-axis">
                  <div className="flex-3 flex y-axis">
                    <span className="text">{item}</span>
                  </div>
                  {onRemove && (
                    <div className="flex-1 flex flex-center">
                      <ButtonSimple
                        type="danger"
                        onClick={() => onRemove(index)}
                        label="-"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          <div className="flex x-axis">
            <div className="flex-3 flex y-axis">
              <InputSimple
                type="text"
                value={text}
                onChange={this.onChangeInput}
              />
            </div>
            <div className="flex-1 flex flex-center">
              <ButtonSimple
                type="success"
                onClick={() => this.onAdd(text)}
                label="+"
              />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default DinamicListSimple;
