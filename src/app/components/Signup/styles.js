import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  height: 300px;

  .subTitle {
    text-align: center;
    width: 100%;
    margin: 20px 0;
    font-size: 16px;
    color: #999;

    strong {
      color: #39ff14;
    }
  }

  .box {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
    .checkBox {
      width: 600px;
      margin: 20px 0;
      color: #777;

      input {
        margin-left: 50px;
      }
    }
  }

  .Input-simples {
    margin-bottom: 5px;

    input {
      width: 400px;
      height: 30px;

      border: none;
      border-bottom: 1px solid #d1d1d1;
      background: #fff;
      padding-left: 10px;
    }
  }

  button {
    width: 400px;
    height: 50px;
    border-radius: 30px;
    border: none;
    background: #39ff14;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
  }
`;
