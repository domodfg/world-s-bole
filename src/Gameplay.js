import Navbar from "./components/Navbar.js";
import Battlesystem from "./components/battleSystem.js";
import "./styles/gameplay.css";
import "./styles/battlesystem.css";
import heading from "./images/gameplayheader.webm";

const GamePlay = () => {
  return (
    <div className="Gameplay">
      <div className="heading">
        <Navbar />
        <video autoPlay muted loop>
          <source src={heading} type="video/mp4" />
        </video>
        <div>
          <h1>系統</h1>
        </div>
      </div>
        <Battlesystem />
    </div>
  );
};

export default GamePlay;