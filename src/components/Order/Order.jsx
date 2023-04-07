import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { removeFromDb } from "../../CRUD/crudToLocal";
import Cart from "../Cart/Cart";
import OrderDetailCart from "../OrderDetailCart/OrderDetailCart";
import "./Order.css";

const Order = () => {
  const dataFromLoader = useLoaderData();
  const [cart, setCart] = useState(dataFromLoader);
  //   console.log(dataFromLoader);
  const removeSingleData = (id) => {
    const restData = cart.filter((pd) => pd.id !== id);
    setCart(restData);
    removeFromDb(id);
  };
  return (
    <div className="shop-container">
      <div className="order-detail-container">
        {cart.map((product) => {
          return (
            <OrderDetailCart
              key={product.id}
              cartData={product}
              removeSingleData={removeSingleData}
            ></OrderDetailCart>
          );
        })}
      </div>
      <div className="cart-container">
        <Cart cartData={cart}>
          <Link to={"/checkout"}>
            <button>Checkout</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
