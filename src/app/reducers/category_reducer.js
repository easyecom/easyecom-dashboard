import { GET_CATEGORIES } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
    //   console.log(action.payload.categories);
      return {
        ...state,
        categories: action.payload.categories,
      };
    default:
      return state;
  }
};
