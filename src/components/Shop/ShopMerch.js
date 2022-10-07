import { gameMerch } from "./gameProduct.js";
import uniqid from "uniqid";

const ShopMerch = (props) => {
  return (
    <div className={props.class}>
      <h2 className="shopDivider">遊戲周邊</h2>
      <ul className="gameMerch">
        {gameMerch.map((item) => {
          return (
            <li className="gameItemsInfo gameMerchInfo" key={uniqid()}>
              <img src={item.img} alt="Products" />
              <div>
                <h2>{item.name}</h2>
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

export default ShopMerch;
