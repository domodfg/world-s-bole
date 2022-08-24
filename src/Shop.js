import Navbar from "./components/Navbar.js";
import pc from "./images/pcgamecase.jpeg";
import ps5 from "./images/ps5gamecase.jpeg";
import React, { useState, useEffect, useRef } from "react";
import uniqid from "uniqid";

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
    let newCartItems = [];
    let cartItemCopy = [...cartItems];
    let item = JSON.parse(e.target.name);
    let foundIndex = cartItems.findIndex(
      (cartItem) => cartItem.name === item.name
    );

    if (foundIndex !== -1) {
      newCartItems = cartItems.map((cartItem) => {
        if (cartItem.name === item.name) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      cartItemCopy = [...newCartItems];
    } else {
      cartItemCopy.push(item);
    }
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
        <div className="gameProductInfo">
          <img src={pc} alt="pc game case" />
          <div>
            <h3>STEAM 數位標準版</h3>
            <p>遊戲類型： ARPG 動作角色扮演</p>
            <p>發行日期：2022-09-30</p>
            <p>發行廠商： WB software Inc.</p>
            <p>遊戲分級： 16+</p>
            <p>
              現價：<span className="price">HKD$399.00</span>
            </p>
            <button name={JSON.stringify(pcCopy)} onClick={addToCart}>
              加入購物車
            </button>
          </div>
        </div>
        <div className="gameProductInfo">
          <img src={ps5} alt="ps5 game case" />
          <div>
            <h3>PS5 數位標準版</h3>
            <p>遊戲類型： ARPG 動作角色扮演</p>
            <p>發行日期：2022-09-20</p>
            <p>發行廠商： WB software Inc.</p>
            <p>遊戲分級： 16+</p>
            <p>
              現價：<span className="price">HKD$429.00</span>
            </p>
            <button name={JSON.stringify(ps5Copy)} onClick={addToCart}>
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
