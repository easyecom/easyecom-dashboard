import { LOGIN_USER, LOGOUT_USER } from "../actions/utils/types";

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload.user,
        authorized: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        authorized: false,
      };
    default:
      return state;
  }
};
