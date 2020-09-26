import React from "react";

export const DataText = ({ keys, value }) => {
  return (
    <div>
      <strong>{keys}: &nbsp;</strong>
      <span>{value}</span>
    </div>
  );
};
