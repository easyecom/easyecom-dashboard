import { GET_ORDERS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload.orders,
      };
    default:
      return state;
  }
};
