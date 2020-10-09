import { getHeaders } from "./localStorage";
import axios from "axios";
import { api } from "../config/index";
import { errorHandling } from "./errorHandling";
import { GET_ORDERS } from "./types";

export const getOrders = (atual, limit, store_id) => {
  return function (dispatch) {
    axios
      .get(
        `${api}/stores/${store_id}/ordersAdmin`, //?offset=${atual}&limit=${limit}`,
        getHeaders()
      )
      .then((response) => {
        // console.log(response.data);
        dispatch({ type: GET_ORDERS, payload: response.data });
      })
      .catch(errorHandling);
  };
};
