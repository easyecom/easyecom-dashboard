// import { Link } from "react-router-dom";
import React from "react";
import { Container } from "./styles";

const PaginationSimple = ({ total, atual, limit, onClick }) => {
  const pages = Math.ceil(total / limit);

  return (
    <Container>
      <div className="Pagination flex x-axis flex-end">
        {[...Array(pages).keys()].map((num, index) => {
          const atualNumberPage = num * limit;
          return (
            <div
              className={`Pagination-item${
                atualNumberPage === atual ? "paginate-item-active" : ""
              }`}
              onClick={() => onClick(atualNumberPage)}
              key={index}
            >
              {num + 1}
            </div>
          );
        })}
      </div>
    </Container>
  );
};
export default PaginationSimple;
