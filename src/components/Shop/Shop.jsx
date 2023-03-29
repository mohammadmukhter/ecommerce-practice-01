import React, { useEffect, useState } from "react";
import { addToDb } from "../../CRUD/crudToLocal";
import Cart from "../Cart/Cart";
import ProductCart from "../ProductCart/ProductCart";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addCartHandler = (product = {}) => {
    const newCartData = [...cartData, product];
    setCartData(newCartData);
    addToDb(product.id);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => {
          return (
            <ProductCart
              key={product.id}
              singleData={{ ...product }}
              addCartHandler={addCartHandler}
            ></ProductCart>
          );
        })}
      </div>
      <div className="cart-container">
        <Cart cartData={cartData}></Cart>
      </div>
    </div>
  );
};

export default Shop;
