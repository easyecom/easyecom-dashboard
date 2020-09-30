import styled from "styled-components";

export const Header = styled.div`
  .container {
    display: flex;
    justify-content: space-between;

    .button-cancel {
      button {
        height: 25px;
        border: none;
        border-radius: 3px;
        font-weight: bold;
        background: red;
        color: #fff;
      }
    }
  }
`;

export const Container = styled.div`
  // width: 100%;
  display: flex;
  justify-content: space-around;

`;

export const Client = styled.div`
  background: red;
  padding: 10px;
  width: 50%;
`;
export const Delivery = styled.div`
  background: red;
  padding: 10px;
  width: 50%;
`;

export const Cart = styled.div`
  padding: 10px;
  background: #999;
`;

export const Payment = styled.div`
  padding: 10px;
  background: blue;
`;
