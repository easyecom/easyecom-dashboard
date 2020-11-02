import axios from "axios";

import { getHeaders } from "./helpers/localStorage";
import { api } from "../config/index";
import { errorHandling } from "./helpers/errorHandling";
import { GET_ORDERS, GET_ORDER, CLEAR_ORDER } from "./utils/types";

export const getOrders = (page, limit, store_id) => {
  return function (dispatch) {
    axios
      .get(`${api}/stores/${store_id}/orders/admin`, getHeaders())
      .then(({ data }) => {
        dispatch({ type: GET_ORDERS, payload: data });
      })
      .catch(errorHandling);
  };
};

export const getOrder = (store_id, order_id) => {
  return function (dispatch) {
    axios
      .get(`${api}/stores/${parseInt(store_id)}/orders/${order_id}/admin`, getHeaders())
      .then(({ data }) => {
        dispatch({ type: GET_ORDER, payload: data });
      })
      .catch(errorHandling);
  };
};

export const clearOrder = () => ({ type: CLEAR_ORDER });
