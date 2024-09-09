import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

function CartDetailsPage() {
  console.log("Cart Details Page :::::::::: ");
  let cart = useSelector((state) => state.cart.carts); // get cart from redux store
  console.log("Cart Details :::::::::: ");
  console.log(cart);

  return (
    <div>
      <h1>Cart Details Page</h1>
    </div>
  );
}

export default CartDetailsPage;
