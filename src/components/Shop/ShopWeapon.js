import React, { useState } from "react";
import { gameItem } from "./gameProduct.js";
import uniqid from "uniqid";
import Dropdown from "react-bootstrap/Dropdown";

const ShopWeapon = (props) => {
  const [itemList, setItemList] = useState(gameItem);
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
    <div style={props.margin}>
      <div className="shopDivider withSort">
        <h2>武器</h2>
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
      </div>
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
                <button
                  className="addToCart"
                  onClick={() => props.handleCart(item)}
                >
                  加入購物車
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShopWeapon;
