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
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 0px 30px 4px rgba(0, 0, 0, 0.18);
`;

export const Client = styled.div`
  // background: red;
  padding: 10px;
  width: 50%;
`;
export const Delivery = styled.div`
  // background: red;
  padding: 10px;
  width: 50%;
`;

export const Cart = styled.div`
  margin-top: 10px;
  padding: 10px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 0px 30px 4px rgba(0, 0, 0, 0.18);
`;

export const Payment = styled.div`
  margin-top: 10px;
  padding: 10px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 0px 30px 4px rgba(0, 0, 0, 0.18);
`;
