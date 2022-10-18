import "../../styles/productdetail.css";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar.js";
import close from "../../images/gameinfo/close.png";
import Footer from "../footer.js";
import ShopNav from "../Shop/ShopNav.js";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCount, setShopContent } from "../../utils/shopSlicer";
import { gameItem, gameMerch } from "./gameProduct.js";

const ProductDetail = () => {
  const [displayAlert, setDisplayAlert] = useState(false);
  const [product, setProduct] = useState({});
  const [buyQuantity, setBuyQuantity] = useState(1);
  const cartItems = useSelector(selectCount);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    let foundIndex = gameItem.findIndex((item) => item.id === id);
    if (foundIndex === -1) {
      let foundIndexMerch = gameMerch.findIndex((merch) => merch.id === id);
      setProduct(gameMerch[foundIndexMerch]);
    } else {
      setProduct(gameItem[foundIndex]);
    }
  }, [id]);

  const addToCart = () => {
    let cartItemCopy = [...cartItems];
    let foundIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === product.id
    );

    if (foundIndex !== -1) {
      cartItemCopy = cartItems.map((cartItem) => {
        if (cartItem.id === product.id) {
          return { ...cartItem, quantity: cartItem.quantity + buyQuantity };
        }
        return cartItem;
      });
    } else {
      let productClone = { ...product };
      productClone.quantity = buyQuantity;
      cartItemCopy.push(productClone);
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
          <div className="productContainer">
            <img src={product.img} alt="Products" />
            <div className="productdetailcontainer">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>
                HKD<span className="price">${product.price}</span>
              </p>
              <p>
                我要買
                <button
                  onClick={() => {
                    setBuyQuantity(buyQuantity + 1);
                  }}
                  className="increase-btn detail-btn"
                >
                  +
                </button>
                <input
                  value={buyQuantity}
                  type="number"
                  onChange={(e) => setBuyQuantity(Number(e.target.value))}
                />
                件
                <button
                  onClick={() => {
                    if (buyQuantity !== 1) {
                      setBuyQuantity(buyQuantity - 1);
                    }
                  }}
                  className="decrease-btn detail-btn"
                >
                  -
                </button>
              </p>
              <button className="addToCart detailCart" onClick={addToCart}>
                加入購物車
              </button>
            </div>
          </div>
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

export default ProductDetail;
