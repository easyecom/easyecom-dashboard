import React from "react";

const Search = ({ value, onChange, placeholder }) => {
  return (
    <div className="Search">
      <input value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
};

export default Search;
