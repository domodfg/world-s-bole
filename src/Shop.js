import React, { useState } from "react";
import Navbar from "./components/Navbar.js";
import pc from "./images/shop/pcgamecase.jpeg";
import ps5 from "./images/shop/ps5gamecase.jpeg";
import uniqid from "uniqid";
import close from "./images/gameinfo/close.png";
import Footer from "./components/footer.js";
import { useSelector, useDispatch } from "react-redux";
import { selectCount, setShopContent } from "./utils/shopSlicer";
import "./styles/shop.css";

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
  const [displayAlert, setDisplayAlert] = useState(false);
  const cartItems = useSelector(selectCount);
  const dispatch = useDispatch();

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
    dispatch(setShopContent(cartItemCopy));
    setDisplayAlert(true);
    setTimeout(() => {
      setDisplayAlert(false);
    }, 3000);
  };

  const pcCopy = ProductFactory(pc, "STEAM 數位標準版", 399, 1);
  const ps5Copy = ProductFactory(ps5, "PS5 數位標準版", 429, 1);

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
      {displayAlert && (
        <div className="buyingpopup">
          <p>成功添加至購物車</p>{" "}
          <img src={close} alt="close" onClick={() => setDisplayAlert(false)} />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Shop;
