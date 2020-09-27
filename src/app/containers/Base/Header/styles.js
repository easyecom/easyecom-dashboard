import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 0 0 0px;
  height: 70px;
  border-bottom: 1px dotted #cc8400;

  .header-box {
    height: 100%;
  }

  .see-store-header {
    padding: 0 5px 0 20px;
  }

  .fa-store {
    color: #3895d3;
  }

  .logout-store-header {
    padding-right: 20px;
    color: red;
    
    .fa-power-off {
      padding-left: 5px;
      color: red;
    }
  }

  .text {
    color: #000;
    font-weight: bold;

    .fas-store-header: {
      margin-right: 15px;
    }
  }

  a {
    text-decoration: none;
  }
`;
