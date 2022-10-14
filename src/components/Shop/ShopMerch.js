import { gameMerch } from "./gameProduct.js";
import uniqid from "uniqid";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ShopMerch = (props) => {
  const navigate = useNavigate();
  return (
    <div className={props.class}>
      <h2 className="shopDivider">遊戲周邊</h2>
      <ul className="gameMerch">
        {gameMerch.map((item) => {
          return (
            <li className="gameItemsInfo gameMerchInfo" key={uniqid()}>
              <img
                src={item.img}
                alt="Products"
                onClick={() => navigate(`/shop/product/${item.id}`)}
              />
              <div>
                <Link to={`/shop/product/${item.id}`}>
                  <h2>{item.name}</h2>
                </Link>
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
