import { GET_PRODUCTS } from "../actions/utils/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
        // console.log(action.payload);
      return {
        ...state,
        products: action.payload.products,
      };
    default:
      return state;
  }
};
