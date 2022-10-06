import { gameProduct } from "./gameProduct.js";
import uniqid from "uniqid";

const ShopGame = (props) => {
  return (
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
                onClick={() => props.handleCart(product)}
              >
                加入購物車
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShopGame;
