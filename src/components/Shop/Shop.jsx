import React, { useEffect, useState } from "react";
import { addToDb, getDataFromLocal } from "../../CRUD/crudToLocal";
import Cart from "../Cart/Cart";
import ProductCart from "../ProductCart/ProductCart";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState([]);

  console.log(products);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const localData = getDataFromLocal();
    // console.log(localData);
    let newData = [];

    localData.forEach((eachData) => {
      for (let x in eachData) {
        const selectedData = products.find((pData) => pData.id === x);
        selectedData
          ? (selectedData.quantity = eachData[x])
          : console.log("no data found!");
        if (selectedData) {
          newData.push(selectedData);
        }
      }
    });

    setCartData(newData);
  }, [products]);

  const addCartHandler = (product = {}) => {
    const newCartData = [...cartData, product];
    // setCartData(newCartData);
    addToDb(product.id);
  };

  //   console.log(cartData);
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
