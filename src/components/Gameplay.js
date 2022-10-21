import React from "react";
import divider from "../images/divider.png";
import gamefootage from "../images/gameplay/gameplay.mp4";
import gameplay from "../images/gameplay/gameplay.jpg";
import "../styles/gameplay.css";

const Gameplay = () => {
  return (
    <div className="gameplay">
      <div className="divider">
        <img src={divider} className="dividermirror" alt="divider" />
        <h2>廣闊的開放世界</h2>
        <img src={divider} alt="divider" />
      </div>
      <div className="gameplaymain">
        <video poster={gameplay} className="gamefootage" autoPlay muted loop>
          <source src={gamefootage} type="video/mp4" />
        </video>
        <div className="gamecaption">
          4K高畫質 <br />
          史詩級冒險
        </div>
      </div>
      <div className="trailerContainer">
        <div className="divider">
          <img src={divider} className="dividermirror" alt="divider" />
          <h2>宣傳影片</h2>
          <img src={divider} alt="divider" />
        </div>
        <iframe
          className="gameTrailer"
          src="https://www.youtube.com/embed/g3ydUeC1mm4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Gameplay;
