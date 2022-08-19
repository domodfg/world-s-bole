import { Link } from "react-router-dom";
import LoginButton from "./login.js";
import LogoutButton from "./logout.js";
import { useAuth0 } from "@auth0/auth0-react";
import shopping_cart from "../images/shopping-cart.png";
import diamond from "../images/diamond.png";
import usericon from "../images/user.png";

const Navbar = (props) => {
  const { user, isAuthenticated } = useAuth0();

  const Login = () => {
    if (isAuthenticated) {
      return (
        <div className="dropdown">
          <button className="dropbtn">
            <img src={usericon} alt="usericon" />
          </button>
          <div className="dropdown-content">
            <p>{user.name}</p>
            <LogoutButton />
          </div>
        </div>
      );
    } else
      return (
        <div className="linkcard">
          <img src={diamond} alt="diamond" />
          <LoginButton />{" "}
        </div>
      );
  };
  return (
    <nav className="header">
      <p className="headerlogo">WB</p>
      <div className="link">
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
          <Link to="/shop" onClick={props.shop}>商店</Link>
        </div>
      </div>
      <div className="link">
        <Login />
        <Link to="/check-out">
          {
            <img
              src={shopping_cart}
              width="20px"
              className="shopping-cart"
              alt="cart"
              onClick={props.shoppingCart}
            />
          }
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
