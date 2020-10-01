import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;

  .image {
    background: blue;
    width: 50%;
    height: 100%;
    border: 1px solid #999;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #999;
    // background: orange;
    width: 50%;
    height: 100%;
  }

  .Login {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 80%;
    height: 80%;
    // background: red;
  }
`;
