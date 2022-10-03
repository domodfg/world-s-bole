import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import close from "./images/gameinfo/close.png";
import divider from "./images/divider.png";
import Footer from "./components/footer.js";
import uniqid from "uniqid";
import { useSelector, useDispatch } from "react-redux";
import { selectCount, setShopContent } from "./utils/shopSlicer";
import "./styles/shop.css";
import { gameProduct, gameItem } from "./components/gameProduct.js";

const Shop = () => {
  const [displayAlert, setDisplayAlert] = useState(false);
  const cartItems = useSelector(selectCount);
  const dispatch = useDispatch();

  const addToCart = (product) => {
    let cartItemCopy = [...cartItems];
    let foundIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === product.id
    );

    if (foundIndex !== -1) {
      cartItemCopy = cartItems.map((cartItem) => {
        if (cartItem.id === product.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
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
      <div className="divider">
        <img src={divider} className="dividermirror" alt="divider" />
        <h2>武器</h2>
        <img src={divider} alt="divider" />
      </div>
      <ul className="gameItems">
        {gameItem.map((item) => {
          const rarity = () => {
            let result;
            if (item.rarity === "★★★★★✩") {
              result = "SSRgameItem";
            } else if (item.rarity === "★★★★★★") {
              result = "URgameItem";
            } else if (item.rarity === "★★★★✩✩") {
              result = "SRgameItem";
            } else if (item.rarity === "★★★✩✩✩") {
              result = "RgameItem";
            } else if (item.rarity === "★★✩✩✩✩") {
              result = "NgameItem";
            }
            return result;
          };
          return (
            <li className="gameItemsInfo" key={uniqid()}>
              <div className={`gameItemsHeader ${rarity()}`}>
                <p>稀有度: {item.rarity}</p>
                <p className="ilevel">等級需求：{item.level}</p>
              </div>
              <img src={item.img} alt="Products" />
              <h2>{item.name}</h2>
              <div className="gameItemsDes">
                <p>{item.description}</p>
                <p className="price">HKD${item.price}</p>
                <button onClick={() => addToCart(item)}>加入購物車</button>
              </div>
            </li>
          );
        })}
      </ul>
      {displayAlert && (
        <div className="buyingpopup">
          <p>成功添加至購物車</p>
          <img src={close} alt="close" onClick={() => setDisplayAlert(false)} />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Shop;
