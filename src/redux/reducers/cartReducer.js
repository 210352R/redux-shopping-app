import { ActionTypes } from "../constants/action-types";
const intialState = {
  carts: [],
};

export const cartReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      console.log("Add to cart reducer");
      console.log(payload);
      return {
        ...state,
        carts: [...state.carts, payload], // Append new item to existing array
      };
    default:
      return state;
  }
};
