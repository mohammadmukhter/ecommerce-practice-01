import React, { useEffect, useState } from "react";
import {
  addToDb,
  getDataFromLocal,
  removeAllFromLocal,
} from "../../CRUD/crudToLocal";
import Cart from "../Cart/Cart";
import ProductCart from "../ProductCart/ProductCart";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState([]);

  //   console.log(products);
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
    const matchedData = cartData.find((x) => x.id === product.id);

    let newCartData = [];
    if (!matchedData) {
      product.quantity = 1;
      newCartData = [...cartData, product];
    } else {
      product.quantity = matchedData.quantity + 1;
      const restData = cartData.filter((x) => x.id !== product.id);
      newCartData = [...restData, product];
    }

    setCartData(newCartData);
    addToDb(product.id);
  };

  const deleteCart = removeAllFromLocal();

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
        <Cart cartData={cartData}>
          <button onClick={deleteCart} className="btn-red">
            Clear Cart
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
