import styled from "styled-components";

export const Container = styled.div`
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
    left: 3px;
    bottom: 1px;
    content: "";
  }
  .switch--shadow + label:before {
    right: 1px;
    background-color: #b7bfd1;
    border-radius: 60px;
    transition: all 0.4s;
  }
  .switch--shadow + label:after {
    width: 23px;
    height:18px;
    margin-top: 1px;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.4s;
  }

  .switch--shadow:checked + label:before {
    background-color: #81b71a;
  }
  .switch--shadow:checked + label:after {
    transform: translateX(18px);
  }
`;
