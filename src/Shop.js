import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import close from "./images/gameinfo/close.png";
import Footer from "./components/footer.js";
import { useSelector, useDispatch } from "react-redux";
import { selectCount, setShopContent } from "./utils/shopSlicer";
import { useParams } from "react-router-dom";
import "./styles/shop.css";
import ShopNav from "./components/Shop/ShopNav.js";
import ShopWeapon from "./components/Shop/ShopWeapon.js";
import ShopGame from "./components/Shop/ShopGame.js";
import ShopMerch from "./components/Shop/ShopMerch.js";
import shopBanner from "./images/shop/shopbanner.png";

const Shop = () => {
  const [displayAlert, setDisplayAlert] = useState(false);
  const cartItems = useSelector(selectCount);
  const dispatch = useDispatch();
  const { category } = useParams();

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
      product.quantity = 1;
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
      <div className="shopwrapper  container-lg">
        <ShopNav />
        <div className="shopHome">
          {!category && (
            <div>
              <h2 className="shopDivider shopFirstDivider">購買遊戲</h2>
              <ShopGame handleCart={addToCart} />
              <ShopMerch handleCart={addToCart} />
              <img className="merchPromo" src={shopBanner} alt="banner" />
              <ShopWeapon handleCart={addToCart} />
            </div>
          )}
          {category === "weapon" && (
            <ShopWeapon handleCart={addToCart} margin={{ marginTop: "5rem" }} />
          )}
          {category === "merch" && (
            <ShopMerch handleCart={addToCart} margin={{ marginTop: "5rem" }} />
          )}
        </div>
      </div>
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
