import React from "react";
import { Container } from "./styles";

const Search = ({ value, onChange, placeholder, onClick }) => {
  return (
    <Container>
      <div className="Search flex flex-center">
        <input value={value} onChange={onChange} placeholder={placeholder} />
        <button>
          <i className="fas fa-search" onClick={onClick} />
        </button>
      </div>
    </Container>
  );
};

export default Search;
