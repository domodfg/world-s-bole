import { Link } from "react-router-dom";
import diamond from "../../images/navbar/diamond.png";

const ShopNav = () => {
  return (
    <nav className="shopNav">
      <div className="linkcard">
        <img src={diamond} alt="diamond" />
        <Link to="/shop">武器</Link>
      </div>
    </nav>
  );
};

export default ShopNav;
