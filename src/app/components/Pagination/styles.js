import styled from "styled-components";

export const Container = styled.div`
  // background: red;
  width: 56.4%;

  .Pagination {
    padding: 30px 20px 0 0;
  }
  .Pagination-item {
    padding-left: 3px;
    // font-size: 0.9rem;
    color: d6d6d6;
    padding: 0 10px;
    border: 1px solid #cccc;
    cursor: pointer;
  }

  .Pagination-item:hover, .paginate-item-active {
    background-color: #cc8400;
    color: #fff;
    border: 1px solid #d6d6d6;
  }
`;
