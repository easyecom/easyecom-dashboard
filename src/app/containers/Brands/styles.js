import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .cat-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 15px;

    .button {
      display: flex;
      align-items: center;
      justify-content: center;

      border: none;
      height: 35px;
      width: 165px;
      background: #81b71a;
      color: #fff;
      border-radius: 3px;
      font-weight: bold;
      cursor: pointer;

      text-decoration: none;
    }
  }
`;
