import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  text-align: center;
`;

export const ContainerHead = styled.div`
  box-shadow: 0px 0px 30px 4px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  padding: 0 10px;
`;

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .card-input {
    margin-top: 30px;
    padding-top: 20px;

    text-align: center;
    /* background: #d9d9d9; */
    box-shadow: 0px 0px 30px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 300px;
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
    justify-content: start;

    padding: 20px 0 0 1%;
  }

  button {
    border: none;
    height: 30px;
    width: 120px;
    background: #81b71a;
    color: #fff;
    border-radius: 3px;
    font-weight: bold;
  }
`;
