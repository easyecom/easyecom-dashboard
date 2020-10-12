import { GET_CATEGORIES } from "./types";
import axios from "axios";
import { api } from "../config/index";
import { errorHandling } from "./errorHandling";
import { getHeaders } from "./localStorage";

export const getCategories = (page, limit, store_id) => {
  return function (dispatch) {
    axios
      .get(`${api}/stores/${store_id}/categories`, getHeaders())
      .then((response) => {
        //   console.log(response)
        dispatch({ type: GET_CATEGORIES, payload: response.data });
      })
      .catch(errorHandling);
  };
};
