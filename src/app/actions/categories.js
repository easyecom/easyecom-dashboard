import axios from "axios";

import { GET_CATEGORIES, GET_CATEGORY } from "./utils/types";
import { api } from "../config/index";
import { errorHandling } from "./helpers/errorHandling";
import { getHeaders } from "./helpers/localStorage";

export const getCategories = (store_id) => {
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

export const saveCategory = (category, store_id, cb) => {
  return function (dispatch) {
    axios
      .post(
        `${api}/stores/${store_id}/categories`,
        {
          categoryName: category.categoryName,
          description: category.description,
          isActive: category.isActive,
          refId: category.refId,
          products: category.products,
        },
        getHeaders()
      )
      .then(({ data }) => {
        // console.log(response);
        dispatch({ type: GET_CATEGORY, payload: data });
        cb(null);
      })
      .catch((err) => cb(errorHandling(err)));
  };
};
