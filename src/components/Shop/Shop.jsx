import React, { useEffect, useState } from "react";
import ProductCart from "../ProductCart/ProductCart";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => {
          return (
            <ProductCart
              key={product.id}
              singleData={{ ...product }}
            ></ProductCart>
          );
        })}
      </div>
      <div className="cart-container">cart section</div>
    </div>
  );
};

export default Shop;
