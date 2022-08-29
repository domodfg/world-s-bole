import facebook from "../images/footer/fb.png";
import instagram from "../images/footer/ig.png";
import twitter from "../images/footer/twitter.png";
import youtube from "../images/footer/youtube.png";

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
        <p>服務條款</p>
        <p>私隱政策</p>
        <p>數碼存根政策</p>
        <p>聯絡我們</p>
      </div>
      <p>&copy; WB software Inc.</p>
    </footer>
  );
};

export default Footer;
