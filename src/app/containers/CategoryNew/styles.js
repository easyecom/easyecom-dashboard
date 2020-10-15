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
      width: 100px;
      background: #0000cd;
      color: #fff;
      border-radius: 3px;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;
