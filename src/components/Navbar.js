import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="header">
      <p>Logo</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/character">Character</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
