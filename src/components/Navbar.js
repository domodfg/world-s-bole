import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="header">
      <p className="headerlogo">WB</p>
      <div className="link">
        <Link to="/">主頁</Link>
        <Link to="/character">角色</Link>
        <Link to="/shop">商店</Link>
      </div>
    </nav>
  );
};

export default Navbar;
