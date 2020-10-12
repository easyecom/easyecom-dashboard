import axios from "axios";

import { GET_CLIENTS } from "./utils/types";
import { api } from "../config/index";
import { errorHandling } from "./helpers/errorHandling";
import { getHeaders } from "./helpers/localStorage";

export const getClients = (page, limit, store_id) => {
  return function (dispatch) {
    axios
      .get(`${api}/stores/${store_id}/clientsAdmin`, getHeaders())
      .then((response) => {
        dispatch({ type: GET_CLIENTS, payload: response.data });
      })
      .catch(errorHandling);
  };
};

// export const searchClients = (dataSearch, page, limit, store_id) => {
//   return function (dispatch) {
//     axios
//       .get(
//         `${api}/stores/${store_id}/clientsAdmin/search${dataSearch}`,
//         getHeaders()
//       )
//       .then((response) => {
//         console.log(response);

//         dispatch({ type: GET_CLIENTS, payload: response.data });
//       })
//       .catch(errorHandling);
//   };
// };
