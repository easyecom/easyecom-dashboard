import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export const Container = styled.div`
  .subTitle {
    text-align: center;
    width: 85%;
    margin: 10px;
    font-size: 15px;
    color: #999;

    strong {
      /* color: #81b71a; */
    }
  }

  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;

    flex-direction: column;
    .checkBox {
      width: 600px;
      margin: 20px 0;
      color: #777;
      font-size: 12px;

      input {
        margin-left: 100px;
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

      margin-top: 5px;
    }
  }

  button {
    width: 250px;
    height: 40px;
    border-radius: 6px;
    border: none;
    background: #81b71a;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;
