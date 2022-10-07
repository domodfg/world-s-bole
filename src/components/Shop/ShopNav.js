import { Link } from "react-router-dom";

const ShopNav = () => {
  return (
    <nav className="shopNav">
      <Link to="/shop">商店主頁</Link>
      <Link to="/shop/weapon">武器</Link>
      <Link to="/shop/merch">遊戲周邊</Link>
    </nav>
  );
};

export default ShopNav;
