import "../styles/joinUs.css";
import leaflet from "../images/leaflet/Leaflet.webp";
import divider from "../images/divider.png";
import { useNavigate } from "react-router-dom";

const JoinUs = () => {
  const navigate = useNavigate();
  return (
    <div className="joinUs">
      <div className="divider">
        <img src={divider} className="dividermirror" alt="divider" />
        <h2>加入戰團</h2>
        <img src={divider} alt="divider" />
      </div>
      <div className="joinUsGrid">
        <img
          className="leaflet"
          src={leaflet}
          alt="leaflet"
          onClick={() => navigate("/shop")}
        />
        <div onClick={() => navigate("/character")}>
          <h2>角色與世界觀</h2>
        </div>
        <div onClick={() => navigate("/gamesystem")}>
          <h2>遊戲系統</h2>
        </div>
        <div onClick={() => navigate("/story")}>
          <h2>故事劇情</h2>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
