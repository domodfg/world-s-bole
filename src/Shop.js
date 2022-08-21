import Navbar from "./components/Navbar.js";
import pc from "./images/pcgamecase.jpg";
import ps5 from "./images/ps5-game-case.jpg";
import React, { useState } from "react";

const ProductFactory = (title, price, quantity) => {
  return {
    id: Math.random().toString(),
    img: pc,
    name: title,
    price: price,
    quantity: quantity,
  }
};

const data = localStorage.hasOwnProperty("projectStorage") ? JSON.parse(localStorage.getItem("projectStorage")) : []

const Shop = () => {
  const [cartItems, setCartItems] = useState(data);

  const addToCart = (e) => {
    let cartItemCopy = [...cartItems];
    let item = JSON.parse(e.target.name);
    cartItemCopy.push(item);
    localStorage.setItem("projectStorage", JSON.stringify(cartItemCopy))
    setCartItems(cartItemCopy);
  };

  const pcCopy = ProductFactory("PC edition", 399, 1);
  const ps5Copy = ProductFactory("PS5 edition", 429, 1);

  return (
    <div className="shop">
      <div className="main">
        <Navbar />
      </div>
      <div className="gamecopy">
        <div>
          <img src={pc} alt="pc game case" />
          <button name={JSON.stringify(pcCopy)} onClick={addToCart}>
            加入購物車
          </button>
        </div>
        <div>
          <img src={ps5} alt="ps5 game case" />
          <button name={JSON.stringify(ps5Copy)} onClick={addToCart}>
            加入購物車
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
