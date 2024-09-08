import { combineReducers } from "redux";
import { productsReducer, selectedProductReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductReducer,
  cart: cartReducer,
});
export default reducers;
