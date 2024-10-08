import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectedProduct,
  removeSelectedProduct,
  addToCart,
} from "../redux/actions/productActions";

const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  let cart = useSelector((state) => state.cart);

  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  const addToCartHandler = (product) => {
    console.log("Add to cart", product, "--- Adding to Cart ---- ");
    dispatch(addToCart(title));
  };

  console.log("Cart Details :::::::::: ");
  console.log(cart.carts);

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div>
                    <button onClick={() => addToCartHandler(product)}>
                      <i className="cart plus icon"></i>
                      Add to Cart
                    </button>
                  </div>
                </div>

                <div className="ui vertical animated button" tabIndex="0">
                  <div>
                    <button>
                      <Link to={`/cart`}>Shop Now</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
