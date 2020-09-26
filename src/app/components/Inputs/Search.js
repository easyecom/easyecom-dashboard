import React from "react";

const Search = ({ value, onChange, placeholder, onClick }) => {
  return (
    <div className="Search flex x-axis">
      <input value={value} onChange={onChange} placeholder={placeholder} />
      <button>
        <i className="fas fa-search" onClick={onClick} />
      </button>
    </div>
  );
};

export default Search;
