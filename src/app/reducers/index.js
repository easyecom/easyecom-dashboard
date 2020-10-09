import { combineReducers } from "redux";

import authReducer from "./auth_reducer";
import orderReducer from "./order_reduce";

const reducers = combineReducers({
  auth: authReducer,
  order: orderReducer,
});

export default reducers;
