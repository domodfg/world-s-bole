import facebook from "../images/footer/fb.png";
import instagram from "../images/footer/ig.png";
import twitter from "../images/footer/twitter.png";
import youtube from "../images/footer/youtube.png";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socialmedia">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
        <img src={youtube} alt="youtube" />
      </div>
      <div className="policy">
        <Link to="/usepolicy">服務條款</Link>
        <Link to="/privacy">私隱政策</Link>
        <Link to="/cookiepolicy">數碼存根政策</Link>
        <Link to="/contactus">聯絡我們</Link>
      </div>
      <p>&copy; WB software Inc.</p>
    </footer>
  );
};

export default Footer;
