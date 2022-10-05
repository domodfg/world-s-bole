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
import Dropdown from "react-bootstrap/Dropdown";

const Shop = () => {
  const [displayAlert, setDisplayAlert] = useState(false);
  const [itemList, setItemList] = useState(gameItem);
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
      product.quantity = 1;
      cartItemCopy.push(product);
    }
    dispatch(setShopContent(cartItemCopy));
    setDisplayAlert(true);
    setTimeout(() => {
      setDisplayAlert(false);
    }, 3000);
  };

  const sortItem = (rule, sign1, sign2) => {
    let sortedItem = [...gameItem];
    switch (rule) {
      case "price":
        sortedItem.sort((a, b) =>
          a.price < b.price
            ? Number(sign1.concat(1))
            : b.price < a.price
            ? Number(sign2.concat(1))
            : 0
        );
        break;
      case "rarity":
        sortedItem.sort((a, b) =>
          a.rarity < b.rarity
            ? Number(sign1.concat(1))
            : b.rarity < a.rarity
            ? Number(sign2.concat(1))
            : 0
        );
        break;
      case "level":
        sortedItem.sort((a, b) =>
          a.level < b.level
            ? Number(sign1.concat(1))
            : b.level < a.level
            ? Number(sign2.concat(1))
            : 0
        );
        break;
      case "reset":
        sortedItem = [...gameItem];
        break;
      default:
        sortedItem = [...gameItem];
    }
    setItemList(sortedItem);
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
                <button
                  className="addToCart"
                  onClick={() => addToCart(product)}
                >
                  加入購物車
                </button>
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
      <Dropdown className="sortButton text-light">
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          排序
        </Dropdown.Toggle>
        <Dropdown.Menu className="bg-dark">
          <Dropdown.Item
            className="bg-dark text-light"
            onClick={() => sortItem("price", "-", "+")}
          >
            價格 低至高
          </Dropdown.Item>
          <Dropdown.Item
            className="bg-dark text-light"
            onClick={() => sortItem("price", "+", "-")}
          >
            價格 高至低
          </Dropdown.Item>
          <Dropdown.Item
            className="bg-dark text-light"
            onClick={() => sortItem("rarity", "-", "+")}
          >
            稀有度 低至高
          </Dropdown.Item>
          <Dropdown.Item
            className="bg-dark text-light"
            onClick={() => sortItem("rarity", "+", "-")}
          >
            稀有度 高至低
          </Dropdown.Item>
          <Dropdown.Item
            className="bg-dark text-light"
            onClick={() => sortItem("level", "-", "+")}
          >
            等級需求 低至高
          </Dropdown.Item>
          <Dropdown.Item
            className="bg-dark text-light"
            onClick={() => sortItem("level", "+", "-")}
          >
            等級需求 高至低
          </Dropdown.Item>
          <Dropdown.Item
            className="bg-dark text-light"
            onClick={() => sortItem("reset")}
          >
            重置
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <ul className="gameItems">
        {itemList.map((item) => {
          const rarity =
            item.rarity === 6
              ? "URgameItem"
              : item.rarity === 5
              ? "SSRgameItem"
              : item.rarity === 4
              ? "SRgameItem"
              : item.rarity === 3
              ? "RgameItem"
              : "NgameItem";
          return (
            <li className="gameItemsInfo" key={uniqid()}>
              <div className={`gameItemsHeader ${rarity}`}>
                <p>
                  稀有度:
                  {`${"★".repeat(item.rarity) + "✩".repeat(6 - item.rarity)}`}
                </p>
                <p className="ilevel">等級需求：{item.level}</p>
              </div>
              <img src={item.img} alt="Products" />
              <h2>{item.name}</h2>
              <div className="gameItemsDes">
                <p>{item.description}</p>
                <p className="price">HKD${item.price}</p>
                <button className="addToCart" onClick={() => addToCart(item)}>
                  加入購物車
                </button>
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
