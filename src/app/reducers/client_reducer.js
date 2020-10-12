import { GET_CLIENTS } from "../actions/utils/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      // console.log(action.payload.clients);
      return {
        ...state,
        clients: action.payload.clients,
      };
    default:
      return state;
  }
};
