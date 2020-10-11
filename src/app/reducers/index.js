import { combineReducers } from "redux";

import authReducer from "./auth_reducer";
import orderReducer from "./order_reducer";
import clientReducer from "./client_reducer";

const reducers = combineReducers({
  auth: authReducer,
  order: orderReducer,
  client: clientReducer
});

export default reducers;
