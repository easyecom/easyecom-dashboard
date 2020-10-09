import axios from "axios";
// import _ from "lodash";

import { LOGIN_USER, LOGOUT_USER } from "./types";

import { api } from "../config";

const saveToken = (user, rememberPassword) => {
  if (!user || !user.token) return console.log("token nao encontrado");
  const [token1, token2, token3] = user.token.split(".");
  localStorage.setItem("token1", token1);
  localStorage.setItem("token2", token2);
  localStorage.setItem("token3", token3);
  localStorage.setItem("rememberPassword", rememberPassword);
};

const clearToken = () => {
  localStorage.removeItem("token1");
  localStorage.removeItem("token2");
  localStorage.removeItem("token3");
  localStorage.removeItem("rememberPassword");
};

const getToken = () => {
  const token1 = localStorage.getItem("token1");
  const token2 = localStorage.getItem("token2");
  const token3 = localStorage.getItem("token3");
  if (!token1 || !token2 || !token3) return null;
  return `${token1}.${token2}.${token3}`;
};

const getHeaders = () => {
  return {
    headers: {
      authorization: `Bearer ${getToken()}`,
    },
  };
};

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

const errorHandling = (error) => {
  if (!error.response || !error.response.data) {
    return { status: 500, message: "Erro no servidor. Tente novamente!" };
  }
  if (error.response.data.message === "user does not exist") {
    return {
      status: 401,
      message: "Usuario não encontrado",
    };
  }

  if (error.response.status === 401) {
    return {
      status: 401,
      message: "Usuario ou senha incorreta",
    };
  }

  if (error.response.data.message) {
    return console.log(error.response);
  }
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
