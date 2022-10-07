import Navbar from "./components/Navbar.js";
import Battlesystem from "./components/battleSystem.js";
import Craftsystem from "./components/craftSystem.js";
import Ridesystem from "./components/ridesystem.js";
import Footer from "./components/footer.js";
import "./styles/gamesystem.css";
import "./styles/battlesystem.css";
import "./styles/craftsystem.css";
import "./styles/ridesystem.css";
import heading from "./images/gameplayheader.webm";
import React from "react";

const GamePlay = () => {
  return (
    <div className="Gamesystem">
      <div className="main">
        <Navbar />
      </div>
      <div className="Gamesystemheading">
        <div className="systemheadtext">
          <h1>
            <span>在</span>
            <span>開</span>
            <span>放</span>
            <span>式</span>
            <span>地</span>
            <span>圖</span>
            <span>中</span>
            <span>自</span>
            <span>由</span>
            <span>探</span>
            <span>索</span><br></br>
            <span>爽</span>
            <span>快</span>
            <span>的</span>
            <span>戰</span>
            <span>鬥</span>
            <span>系</span>
            <span>統</span><br></br>
            <span>多</span>
            <span>人</span>
            <span>連</span>
            <span>線</span>
            <span>合</span>
            <span>作</span>
            <span>闖</span>
            <span>關</span>
          </h1>
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
