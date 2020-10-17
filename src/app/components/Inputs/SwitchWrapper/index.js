import React from "react";
import { Container } from "./styles";

const SwitchWrapper = ({ label, value, onChange }) => {
  return (
    <Container>
      <div class="switch__container">
        <input
          id="switch-shadow"
          class="switch switch--shadow"
          type="checkbox"
          checked={value} onChange={onChange} 
        />
        <label for="switch-shadow"></label>
      </div>
    </Container>
  );
};

export default SwitchWrapper;
