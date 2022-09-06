import React from "react";
import gamefootage from "../images/gameplay/gameplay.mp4";

const Gameplay = () => {
  return (
    <div className="gameplay">
      <div>
        <h2>廣闊的開放世界</h2>
        <video className="gamefootage" autoPlay muted loop>
          <source src={gamefootage} type="video/mp4" />
        </video>
        <div className="gamecaption">
          4K高畫質 <br />
          史詩級冒險
        </div>
      </div>
    </div>
  );
};

export default Gameplay;
