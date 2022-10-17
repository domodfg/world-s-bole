import { Link } from "react-router-dom";

const ShopNav = () => {
  return (
    <nav className="shopNav">
      <Link to="/shop">商店主頁</Link>
      <hr/>
      <Link to="/shop/weapon">武器</Link>
      <hr/>
      <Link to="/shop/merch">遊戲周邊</Link>
      <hr/>
      <Link to="/shop/gacha">角色抽卡</Link>
      <hr/>
    </nav>
  );
};

export default ShopNav;
