import Navbar from "./components/Navbar/Navbar.js";
import Battlesystem from "./components/battleSystem.js";
import Footer from "./components/footer.js";
import "./styles/gamesystem.css";
import "./styles/battlesystem.css";
import heading from "./images/gameplayheader.webm";

const GamePlay = () => {
  return (
    <div className="Gamesystem">
      <div className="navContainer">
        <Navbar />
      </div>
      <div className="Gamesystemheading">
        <video autoPlay muted loop>
          <source src={heading} type="video/mp4" />
        </video>
      </div>
      <Battlesystem />
      <Footer />
    </div>
  );
};

export default GamePlay;
