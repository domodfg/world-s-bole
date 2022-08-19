import Navbar from "./components/Navbar.js";
import pc from "./images/pcgamecase.jpg";
import ps5 from "./images/ps5-game-case.jpg";
import React, { useState } from "react";
import CheckOut from "./components/checkOut"

const ProductFactory = (title, price, quantity) => {
  return { title, price, quantity };
};

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);
  const [openStatus, setOpenStatus] = useState({shop: true, shoppingCart: false});

  const shopClick = () => {
    setOpenStatus({shop: true, shoppingCart: false})
  }

  const shoppingCartClick = () => {
    setOpenStatus({shop: false, shoppingCart: true})
  }

  const addToCart = (e) => {
    let cartItemCopy = [...cartItems];
    let item = JSON.parse(e.target.name);
    cartItemCopy.push(item);
    setCartItems(cartItemCopy);
    console.log(cartItems);
  };

  const pcCopy = ProductFactory("PC edition", 399, 1);
  const ps5Copy = ProductFactory("PS5 edition", 429, 1);

  if(openStatus.shop) {
    return (
      <div className="shop">
        <div className="main">
          <Navbar shop={shopClick} shoppingCart={shoppingCartClick}/>
        </div>
        { openStatus.shop &&
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
        }
      </div>
    )
  }else{
    return (
      <div>
        <div className="main">
          <Navbar />
        </div>  
      {openStatus.shoppingCart && <CheckOut cartItems={cartItems} />}
      </div>
    )
  }
};

export default Shop;
