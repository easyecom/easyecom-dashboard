import axios from "axios";

import { GET_BRANDS, GET_BRAND } from "./utils/types";
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

export const saveBrand = (brand, store_id, cb) => {
  return function (dispatch) {
    axios
      .post(
        `${api}/stores/${store_id}/brands`,
        {
          brandName: brand.brandName,
          description: brand.description,
          isActive: brand.isActive,
          refId: brand.refId,
          products: brand.products,
        },
        getHeaders()
      )
      .then((response) => {
        //   console.log(response)
        dispatch({ type: GET_BRAND, payload: response.data });
        cb(null);
      })
      .catch((err) => cb(errorHandling(err)));
  };
};
