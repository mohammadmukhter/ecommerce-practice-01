import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ProductCart.css";

const ProductCart = (props) => {
  //   console.log(props);
  const { id, name, img, seller, ratings, quantity, price } = props.singleData;
  const addCartHandler = props.addCartHandler;

  return (
    <div className="cart-item">
      <img className="cart-img" src={img} alt="" />
      <div className="product-info">
        <div>
          <h3 className="product-name">{name}</h3>
        </div>
        <div>
          <p>price: {price}</p>
          <p>
            <small>Manufacturer: {seller}</small>
          </p>
          <p>
            <small>Rating: {ratings}</small>
          </p>
        </div>
      </div>
      <button
        className="btn-add-cart"
        onClick={() => addCartHandler(props.singleData)}
      >
        Add to Cart
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default ProductCart;
