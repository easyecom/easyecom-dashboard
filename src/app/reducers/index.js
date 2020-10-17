import { combineReducers } from "redux";

import authReducer from "./auth_reducer";
import orderReducer from "./order_reducer";
import clientReducer from "./client_reducer";
import categoryReducer from "./category_reducer";
import brandReducer from "./brand_reducer";
import productReducer from "./product_reducer";

const reducers = combineReducers({
  auth: authReducer,
  order: orderReducer,
  client: clientReducer,
  category: categoryReducer,
  brand: brandReducer,
  product: productReducer,
});

export default reducers;
