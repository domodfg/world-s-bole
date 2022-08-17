import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="header">
      <p className="headerlogo">WB</p>
      <div className="link">
        <Link to="/">Home</Link>
        <Link to="/character">Character</Link>
        <Link to="/shop">Shop</Link>
      </div>
    </nav>
  );
};

export default Navbar;
