import { GET_ORDERS, GET_ORDER, CLEAR_ORDER } from "../actions/utils/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload.orders,
      };
    case GET_ORDER:
      return {
        ...state,
        order: action.payload.order,
      };
    case CLEAR_ORDER:
      return {
        ...state,
        order: null,
      };
    default:
      return state;
  }
};
