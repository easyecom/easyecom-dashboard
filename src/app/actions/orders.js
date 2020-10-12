import axios from "axios";

import { getHeaders } from "./helpers/localStorage";
import { api } from "../config/index";
import { errorHandling } from "./helpers/errorHandling";
import { GET_ORDERS } from "./utils/types";

export const getOrders = (page, limit, store_id) => {
  return function (dispatch) {
    axios
      .get(
        `${api}/stores/${store_id}/ordersAdmin?page=${page}&limit=${limit}`,
        getHeaders()
      )
      .then((response) => {
        dispatch({ type: GET_ORDERS, payload: response.data });
      })
      .catch(errorHandling);
  };
};

// export const getOrders = (dataSearch, page, limit, store_id) => {
//   return function (dispatch) {
//     axios
//       .get(
//         `${api}/stores/${store_id}/ordersAdmin/search/${dataSearch}?page=${page}&limit=${limit}`,
//         getHeaders()
//       )
//       .then((response) => {
//         dispatch({ type: GET_ORDERS, payload: response.data });
//       })
//       .catch(errorHandling);
//   };
// };
