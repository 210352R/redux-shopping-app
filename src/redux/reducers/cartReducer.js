import { ActionTypes } from "../constants/action-types";
const intialState = {
  cart: [],
};

export const cartReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      console.log("Add to cart reducer");
      console.log(payload);
      return { ...state, cart: payload };
    default:
      return state;
  }
};
