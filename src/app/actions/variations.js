import axios from "axios";

import { api } from "../config";
import { getHeaders } from "./helpers/localStorage";
import { GET_VARIATION } from "./utils/types";
import { errorHandling } from "./helpers/errorHandling";

export const getVariation = (store_id, variation_id) => {
  return function (dispatch) {
    axios
      .get(`${api}/stores/${store_id}/variations/${variation_id}`, getHeaders())
      .then((response) => {
        // console.log(response);
        dispatch({ type: GET_VARIATION, payload: response.data });
      })
      .catch(errorHandling);
  };
};
