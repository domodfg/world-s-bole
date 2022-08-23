import Navbar from "./components/Navbar.js";
import pc from "./images/pcgamecase.jpeg";
import ps5 from "./images/ps5-game-case.jpg";
import React, { useState, useEffect, useRef } from "react";
import uniqid from 'uniqid';


const ProductFactory = (img, title, price, quantity) => {
  return {
    id: uniqid(),
    img: img,
    name: title,
    price: price,
    quantity: quantity,
  };
};

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);
  const firstRun = useRef(true);

  const addToCart = (e) => {
    let cartItemCopy = [...cartItems];
    let item = JSON.parse(e.target.name);
    cartItemCopy.push(item);
    setCartItems(cartItemCopy);
  };

  //get localstorage when render

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("projectStorage"));
    if (cartItems) {
      setCartItems(cartItems);
    }
  }, []);

  //change localstorage when cartItems changes but prevent it runs when render as it will return an empty array

  useEffect(() => {
    if (!firstRun.current) {
      localStorage.setItem("projectStorage", JSON.stringify(cartItems));
    }
    firstRun.current = false;
  }, [cartItems]);

  const pcCopy = ProductFactory(pc, "PC edition", 399, 1);
  const ps5Copy = ProductFactory(ps5, "PS5 edition", 429, 1);

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
