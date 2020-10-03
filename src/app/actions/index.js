import axios from "axios";

// import { LOGIN_USER } from "./types";

import { api } from "../config";
console.log(api);
export const handleLogin = ({ email, password }, callback) => {
  console.log("teste");
  return function (dispatch) {
    axios
      .post(`${api}/session`, { email, password })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
