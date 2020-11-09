import { GET_VARIATION } from "../actions/utils/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_VARIATION:
        // console.log(action.payload);
      return {
        ...state,
        variation: action.payload,
      };
    default:
      return state;
  }
};
