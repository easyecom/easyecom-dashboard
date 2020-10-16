import { GET_CATEGORIES, GET_CATEGORY } from "../actions/utils/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      //   console.log(action.payload.categories);
      return {
        ...state,
        categories: action.payload.categories,
      };
    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload.category,
      };
    default:
      return state;
  }
};
