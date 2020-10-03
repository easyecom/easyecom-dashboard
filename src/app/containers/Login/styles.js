import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d3d3d3;

  height: 100vh;

  .Login {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 80%;
    height: 70%;
    background: #fff;

    box-shadow: 0px 0px 30px 4px rgba(0, 0, 0, 0.18);
    .image {
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
    }

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 50%;
      height: 100%;

      .login-cadastro {
        display: flex;
        width: 410px;

        button {
          margin-right: 10px;
          width: 100px;
          border: none;
          background: #fff;
          font-size: 20px;
          color: #999;
          cursor: pointer;
          outline: none;
        }
        
        .button-active {
          border-bottom: 3px solid #00008b;
          font-weight: bold;
          color: #00008b;
          outline: none;
        }
      }
    }
  }
`;
