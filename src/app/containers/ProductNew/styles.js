import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  text-align: center;
  height: 100%;
`;

export const ContainerHead = styled.div`
  box-shadow: 0px 0px 30px 4px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  padding: 0 10px;
  height: 100%;
`;

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  /* background: red; */

  .boxOptions {
    display: flex;
    justify-content: center;

    margin: 0 0 30px 0px;

    .box {
      display: flex;
      /* justify-content: center; */
      align-items: center;

      height: 100%;
      width: 100%;

      p {
        margin-right: 10px
      }
    }
  }

  .card-input {
    margin-top: 30px;
    padding-top: 20px;

    text-align: center;
    /* background: #d9d9d9; */
    box-shadow: 0px 0px 30px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    border-radius: 5px;

    div {
      /* background: blue; */
    }
  }

  p {
    margin: 3px;
    color: #000;
    text-align: start;
    padding: 0 0 0 1%;
  }

  input {
    margin-bottom: 10px;
    padding: 8px 15px;
    border: 1px solid #c9c9c9;
    font-size: 1rem;
    width: 95%;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    padding: 0 1% 0 20px;
  }

  button {
    border: none;
    height: 30px;
    width: 300px;
    background: #81b71a;
    color: #fff;
    border-radius: 3px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;
