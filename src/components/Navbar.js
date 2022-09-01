import { Link } from "react-router-dom";
import LoginButton from "./login.js";
import LogoutButton from "./logout.js";
import { useAuth0 } from "@auth0/auth0-react";
import shopping_cart from "../images/navbar/shopping-cart.png";
import diamond from "../images/navbar/diamond.png";
import usericon from "../images/navbar/user.png";

const Navbar = () => {
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
          <Link to="/story">故事</Link>
        </div>
        <div className="linkcard">
          <img src={diamond} alt="diamond" />
          <Link to="/shop">商店</Link>
        </div>
      </div>
      <div className="link rightlink">
        <Login />

        <div className="linkcard">
          <img src={shopping_cart} width="20px" alt="cart" />

          <Link to="/check-out">
            <div className="shopping-cart">購物車</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
