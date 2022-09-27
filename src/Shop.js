import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import close from "./images/gameinfo/close.png";
import Footer from "./components/footer.js";
import uniqid from "uniqid";
import { useSelector, useDispatch } from "react-redux";
import { selectCount, setShopContent } from "./utils/shopSlicer";
import "./styles/shop.css";
import gameProduct from "./components/gameProduct.js";

const Shop = () => {
  const [displayAlert, setDisplayAlert] = useState(false);
  const cartItems = useSelector(selectCount);
  const dispatch = useDispatch();

  const addToCart = (product) => {
    let newCartItems = [];
    let cartItemCopy = [...cartItems];
    let foundIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === product.id
    );

    if (foundIndex !== -1) {
      newCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === product.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      cartItemCopy = [...newCartItems];
    } else {
      cartItemCopy.push(product);
    }
    dispatch(setShopContent(cartItemCopy));
    setDisplayAlert(true);
    setTimeout(() => {
      setDisplayAlert(false);
    }, 3000);
  };

  return (
    <div className="shop">
      <Navbar />
      <div className="gamecopy">
        {gameProduct.map((product) => {
          return (
            <div className="gameProductInfo" key={uniqid()}>
              <img src={[product.img]} alt="pc game case" />
              <div>
                <h2>{product.name}</h2>
                <p>遊戲類型： ARPG 動作角色扮演</p>
                <p>發行日期：2022-09-30</p>
                <p>發行廠商： WB software Inc.</p>
                <p>遊戲分級： 16+</p>
                <p>
                  現價：<span className="price">HKD${product.price}</span>
                </p>
                <button onClick={() => addToCart(product)}>加入購物車</button>
              </div>
            </div>
          );
        })}
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
