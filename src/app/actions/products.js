import axios from "axios";

import { api } from "../config";
import { getHeaders } from "./helpers/localStorage";
import { GET_PRODUCTS } from "./utils/types";
import { errorHandling } from "./helpers/errorHandling";

export const getProducts = (store_id) => {
  return function (dispatch) {
    axios
      .get(`${api}/stores/${store_id}/products`, getHeaders())
      .then((response) => {
        // console.log(response);
        dispatch({ type: GET_PRODUCTS, payload: response.data });
      })
      .catch(errorHandling);
  };
};


