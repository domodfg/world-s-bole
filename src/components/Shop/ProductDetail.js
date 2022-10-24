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
    if (buyQuantity <= 0 || !Number.isInteger(buyQuantity) ) {
      setDisplayAlert("failure");
      setTimeout(() => {
        setDisplayAlert(false);
      }, 3000);
    } else {
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
      setDisplayAlert("success");
      setTimeout(() => {
        setDisplayAlert(false);
      }, 3000);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="shop">
        <div className="shopwrapper  container-lg">
          <ShopNav />
          <div className="shopHome">
            <div className="productContainer">
              <img src={product.img} alt="Products" />
              <div className="productdetailcontainer">
                <div>
                  <h2>{product.name}</h2>
                  <p>{!product.detail && product.description}</p>
                  <p>{product.detail}</p>
                  {product.level && <p>等級需求: {product.level}</p>}
                  {product.rarity && (
                    <p>
                      稀有度:
                      {`${
                        "★".repeat(product.rarity) +
                        "✩".repeat(6 - product.rarity)
                      }`}
                    </p>
                  )}
                </div>
                <div>
                  <p>
                    單件售價：
                    <span className="price">HKD ${product.price}</span>
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
                        if (buyQuantity > 1) {
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
            <div className="productSpecial">
              {product.special && <hr />}
              {product.special && <p>物品特殊效果：</p>}
              {product.special &&
                product.special.map((special, i) => {
                  return <p key={i}>{special}</p>;
                })}
            </div>
            <hr />
            <ul className="shopPolicy">
              <p>購買條款</p>
              <li>
                用戶下單前請細心留意購買之產品是否正確，如經下單及付款，即代表完全同意本商城所有條款。
              </li>
              <li>我們不會對未完成付款的訂單保留產品庫存</li>
              <li>
                如因為本公司未能提供已付款的商品，所付款的金額將會退到會員的餘額中。
              </li>
              <li>
                產品內容以官方提供為準，產品內容如有任何更改將不另行通知。
              </li>
              <li>
                如產品出現任何問題(包括卡號錯誤)，請於發貨日期3天內向客服回報，逾期將不受理。
              </li>
              <li>
                虛擬產品一經發貨，不論客人已經查看與否，無論任何理由，絕不接受退款、退貨或換貨。
              </li>
              <li>預購產品不設退/換貨/退款/退回餘額</li>
              <li>產品內容中展示之圖片僅供參考，請以實物為準</li>
            </ul>
          </div>
        </div>
        {displayAlert === "success" && (
          <div className="buyingpopup">
            <p>成功添加至購物車</p>
            <img
              src={close}
              alt="close"
              onClick={() => setDisplayAlert(false)}
            />
          </div>
        )}
        {displayAlert === "failure" && (
          <div className="buyingpopup failurepopup">
            <p>購買數量錯誤！</p>
            <img
              src={close}
              alt="close"
              onClick={() => setDisplayAlert(false)}
            />
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetail;
