import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .switch {
    position: absolute;
    margin-left: -9999px;
    visibility: hidden;
  }

  .switch + label {
    display: block;
    position: relative;
    cursor: pointer;
    outline: none;
    user-select: none;
  }

  .switch--shadow + label {
    padding: 2px;
    width: 43px;
    height: 18px;
    background-color: #dddddd;
    border-radius: 60px;
  }

  .switch--shadow + label:before,
  .switch--shadow + label:after {
    display: block;
    position: absolute;
    top: 1px;
    left: 1px;
    bottom: 1px;
    content: "";
  }
  .switch--shadow + label:before {
    right: 1px;
    background-color: #f1f1f1;
    border-radius: 60px;
    transition: all 0.4s;
  }
  .switch--shadow + label:after {
    width: 27px;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.4s;
  }

  .switch--shadow:checked + label:before {
    background-color: #8ce196;
  }
  .switch--shadow:checked + label:after {
    transform: translateX(18px);
  }

  /* .cat-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 15px;

    .button {
      display: flex;
      align-items: center;
      justify-content: center;

      border: none;
      height: 35px;
      width: 100px;
      background: #0000cd;
      color: #fff;
      border-radius: 3px;
      font-weight: bold;
      cursor: pointer;
    }
  } */
`;
