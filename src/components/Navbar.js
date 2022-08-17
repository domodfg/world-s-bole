import { Link } from "react-router-dom";
import spellbook from "../images/spell-book.png";

const Navbar = () => {
  return (
    <nav className="header">
      <img src={spellbook} className="spellbook" alt="logo"/>
      <div className="link">
        <Link to="/">Home</Link>
        <Link to="/character">Character</Link>
        <Link to="/shop">Shop</Link>
      </div>
    </nav>
  );
};

export default Navbar;
