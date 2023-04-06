import React from "react";
import "./OrderDetailCart.css";

const OrderDetailCart = ({ cartData, removeSingleData }) => {
  // console.log(cartData);

  return (
    <div className="order-detail">
      <img src={cartData.img} alt="" />
      <div className="cart-product-info">
        <p>{cartData.name}</p>
        <p>price: {cartData.price}</p>
        <p>quantity: {cartData.quantity}</p>
      </div>
      <a href="#">
        <button onClick={() => removeSingleData(cartData.id)}>D</button>
      </a>
    </div>
  );
};

export default OrderDetailCart;
