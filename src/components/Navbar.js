import { Link } from "react-router-dom";
import LoginButton from "./login.js";
import LogoutButton from "./logout.js";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const {isAuthenticated} = useAuth0();
  const Login = () => {
    if (isAuthenticated) {
      return <LogoutButton />;
    } else return <LoginButton />;
  };
  return (
    <nav className="header">
      <p className="headerlogo">WB</p>
      <div className="link">
        <Link to="/">主頁</Link>
        <Link to="/character">角色</Link>
        <Link to="/shop">商店</Link>
        <Login />
      </div>
    </nav>
  );
};

export default Navbar;
