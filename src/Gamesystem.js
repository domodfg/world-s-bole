import Navbar from "./components/Navbar/Navbar.js";
import Battlesystem from "./components/battleSystem.js";
import Craftsystem from "./components/craftSystem.js";
import Ridesystem from "./components/ridesystem.js";
import Footer from "./components/footer.js";
import "./styles/gamesystem.css";
import "./styles/battlesystem.css";
import "./styles/craftsystem.css";
import "./styles/ridesystem.css";
import heading from "./images/gamesystem/gamesystemheading.webm";
import React from "react";
import { HashLink } from 'react-router-hash-link';

const GamePlay = () => {
  return (
    <div className="Gamesystem">
      <div className="navContainer">
        <Navbar />
      </div>
      <div className="Gamesystemheading">
        <div className="systemnav">
          <HashLink className="systemnavbox1" smooth to={"/Gamesystem#battlesystem"}>戰 鬥 系 統</HashLink>

          <HashLink className="systemnavbox2" smooth to={"/Gamesystem#craftsystem"}>合 成 系 統</HashLink>

          <HashLink className="systemnavbox3" smooth to={"/Gamesystem#ridesystem"}>坐 騎 系 統</HashLink>
        </div>
        
        <video autoPlay muted loop>
          <source src={heading} type="video/mp4" />
        </video>
      </div>
      <Battlesystem />
      <Craftsystem />
      <Ridesystem />
      <Footer />
    </div>
  );
};

export default GamePlay;
