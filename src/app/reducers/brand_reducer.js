import { GET_BRANDS } from "../actions/utils/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_BRANDS:
    //   console.log(action.payload.brands);
      return {
        ...state,
        brands: action.payload.brands,
      };
    default:
      return state;
  }
};