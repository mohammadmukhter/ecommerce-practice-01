import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const cartProducts = props.cartData;

  let quantity = 0;
  let total = 0;
  let totalShippingCharge = 0;
  let tax = 0;

  cartProducts.forEach((product) => {
    // console.log(product);

    quantity += product.quantity;
    total += product.price;
    totalShippingCharge += product.shipping;
    tax += (product.price * 5) / 100;
  });

  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <h3>Selected Product: {quantity}</h3>
      <p>Total Price: ${total} </p>
      <p>Total Shipping Charge: ${totalShippingCharge.toFixed(2)} </p>
      <p>Tax: ${tax} </p>
      <h3>Grand Total: ${(total + totalShippingCharge + tax).toFixed(2)} </h3>
      <div>
        <button className="btn-red ">Clear Cart</button>
        <button className="btn-green">Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
