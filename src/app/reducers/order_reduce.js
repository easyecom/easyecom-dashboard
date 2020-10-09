import { GET_ORDERS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_ORDERS:
      console.log(action.payload.orders);
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
};
