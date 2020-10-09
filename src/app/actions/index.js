import axios from "axios";
// import _ from "lodash";

import { LOGIN_USER, LOGOUT_USER } from "./types";

import { api } from "../config";

import { saveToken, getHeaders, clearToken } from "./localStorage";
import { errorHandling } from "./errorHandling";

export const initApp = () => {
  const rememberPassword = localStorage.getItem("rememberPassword");
  if (rememberPassword === "false") clearToken();
};

export const handleLogin = (
  { email, password, rememberPassword },
  callback
) => {
  return function (dispatch) {
    axios
      .post(`${api}/session`, { email, password })
      .then((response) => {
        saveToken(response.data.user, rememberPassword);

        dispatch({ type: LOGIN_USER, payload: response.data });
      })
      .catch((err) => callback(errorHandling(err)));
  };
};

export const getUser = () => {
  return function (dispatch) {
    axios
      .get(`${api}/users`, getHeaders())
      .then((response) => {
        saveToken(response.data.user, true);
        dispatch({ type: LOGIN_USER, payload: response.data });
      })
      .catch(errorHandling);
  };
};

export const handleLogout = () => {
  clearToken();
  return { type: LOGOUT_USER };
};
