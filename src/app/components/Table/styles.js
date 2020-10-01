import styled from "styled-components";

export const Container = styled.div`

  .simple {
    width: 99%;
  }

  table.simple {
    border-collapse: collapse;
  }

  table.simple {
    th {
      padding: 10px 0;
      text-align: start;

    }

    .list-order {
      border-top: 1px solid #c9c9c9;
      padding: 20px 10px 10px 0;
    }

    .button-details {
      padding-left: -10;
      width: 10px;
      // background: red;
      border-top: 1px solid #c9c9c9;
      button {
        border: none;
        height: 35px;
        background: #cc8400;
        color: #fff;
        border-radius: 3px;
        font-weight: 500;
        cursor: pointer;
      }
  }
`;
