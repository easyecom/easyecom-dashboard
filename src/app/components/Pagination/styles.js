import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .Pagination {
    padding: 30px 20px 0 0;
  }
  .Pagination-item {
    color: d6d6d6;
    padding: 0 10px;
    border: 1px solid #cccc;
    cursor: pointer;
  }

  .Pagination-item:hover,
  .paginate-item-active {
    background-color: #81b71a;
    color: #fff;
    padding: 0 10px;
    border: 1px solid #d6d6d6;
  }
`;
