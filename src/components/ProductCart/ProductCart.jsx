import React from "react";
import "./ProductCart.css";

const ProductCart = (props) => {
  console.log(props.singleData);
  const { id, name, img, seller, ratings, quantity, price } = props.singleData;
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
      <button className="btn-add-cart">Add to Cart</button>
    </div>
  );
};

export default ProductCart;
