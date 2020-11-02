import styled from "styled-components";

export const Container = styled.div`
  .title {
    display: flex;
    justify-content: center;
  }

  ul.status {
    padding: 0;
  }
  .status {
    display: flex;
    justify-content: center;
    justify-content: space-around;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #fff;
      padding: 7px;
      height: 100px;
      width: 160px;
      span {
        font-size: 44px;
      }
    }

    .card-on {
      box-shadow: 0px 0px 3px 1px #81b71a;
      span {
        color: #81b71a;
      }
    }
    .card-process {
      box-shadow: 0px 0px 3px 1px #f59622;
      span {
        color: #f59622;
      }
    }
    .card-off {
      box-shadow: 0px 0px 3px 1px red;
      span {
        color: red;
      }
    }
  }
  width: 100%;
  /* padding: 10px; */
`;
