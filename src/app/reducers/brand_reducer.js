import { GET_BRANDS, GET_BRAND } from "../actions/utils/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_BRANDS:
      //   console.log(action.payload.brands);
      return {
        ...state,
        brands: action.payload.brands,
      };
    case GET_BRAND:
      console.log(action.payload);
      return {
        ...state,
        brand: action.payload.brand,
      };
    default:
      return state;
  }
};
