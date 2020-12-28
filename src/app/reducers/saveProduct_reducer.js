import { SAVE_PRODUCT } from "../actions/utils/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SAVE_PRODUCT:
      // console.log(action.payload);
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};
