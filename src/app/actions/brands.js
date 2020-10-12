import axios from "axios";

import { GET_BRANDS } from "./utils/types";
import { getHeaders } from "./helpers/localStorage";
import { api } from "../config";
import { errorHandling } from "./helpers/errorHandling";

export const getBrands = (store_id) => {
  return function (dispatch) {
    axios
      .get(`${api}/stores/2/brands`, getHeaders())
      .then((response) => {
        // console.log(response);
        dispatch({ type: GET_BRANDS, payload: response.data });
      })
      .catch(errorHandling);
  };
};
