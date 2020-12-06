import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #81b71a;
  height: 100vh;

  .Login {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 70%;
    width: 45%;
    background: #fff;

    border-radius: 10px;

    box-shadow: 0px 0px 30px 4px rgba(0, 0, 0, 0.1);
    /* .image {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      background: url(https://www.climba.com.br/blog/wp-content/uploads/2018/12/259186-retirar-o-produto-na-loja-fisica-o-novo-diferencial-do-ecommerce.png)
        center center / 100% 100%;
      background-color: #cc8400;
      color: #fff;

      width: 50%;
      height: 100%;
    } */

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      /* width: 50%;
      height: 100%; */

      strong {
        margin-bottom: 60px;
        font-size: 25px;
      }

      .login-cadastro {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 50px;

        button {
          margin-right: 10px;
          width: 100%;
          border: none;
          background: #fff;
          font-size: 20px;
          color: #999;
          cursor: pointer;
          outline: none;
        }

        /* .button-active {
          border-bottom: 3px solid #00008b;
          font-weight: bold;
          color: #00008b;
          outline: none;
        } */
      }
    }
  }
`;
