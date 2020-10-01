import React, { Component } from "react";

import ListItems from "../ListItems/index";
import { Container } from "./styles";

class Menu extends Component {
  state = { open: true };

  toggleOpen = () => this.setState({ open: !this.state.open });

  render() {
    const { open } = this.state;
    return (
       <Container>
        <div className={`Menu ${open ? "menu-open" : ""} container`}>
          <div
            className={`item-top flex ${open ? "flex-end" : "flex-center"}`}
            onClick={() => this.toggleOpen()}
          >
            {<i className={`fas fa-arrow-${open ? "left" : "right"}`} />}
          </div>
          <ListItems className="Menu-" open={open} history={this.props.history} />
        </div>
      </Container>
    );
  }
}

export default Menu;
