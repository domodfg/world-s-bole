import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import React from "react";
import diamond from "../../images/navbar/diamond.png";
import shopping_cart from "../../images/navbar/shopping-cart.png";

class Burger extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <div className="linkcard">
          <img src={diamond} alt="diamond" />
          <Link to="/">主頁</Link>
        </div>
        <div className="linkcard">
          <img src={diamond} alt="diamond" />
          <Link to="/character">角色</Link>
        </div>
        <div className="linkcard">
          <img src={diamond} alt="diamond" />
          <Link to="/story">故事</Link>
        </div>
        <div className="linkcard">
          <img src={diamond} alt="diamond" />
          <Link to="/gamesystem">系統</Link>
        </div>
        <div className="linkcard">
          <img src={diamond} alt="diamond" />
          <Link to="/shop">商店</Link>
        </div>
        <div className="linkcard">
          <img src={shopping_cart} width="20px" alt="cart" />
          <Link to="/check-out">
            購物車
          </Link>
        </div>
      </Menu>
    );
  }
}

export default Burger;
