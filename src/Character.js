import Navbar from "./components/Navbar.js";
import "./styles/character.css";
import cityofend from "./images/cityofend.jpeg";
import seraphine from "./images/seraphine.jpeg";
import roam from "./images/roam.jpeg";
import time from "./images/time.jpeg";
import moonisle from "./images/moonisle.jpg";
import React, { useState } from "react";
import { Cityofendinfo, Cityofendtitle } from "./components/Cityofendinfo.js";
import { Seraphineinfo, Seraphinetitle } from "./components/Seraphine.js";
import { Roaminfo, Roamtitle } from "./components/Roam.js";
import { Timeinfo, Timetitle } from "./components/Time.js";
import { Mooninfo, Moontitle } from "./components/Moonisle.js";

const Character = () => {
  const [displayInfo, setDisplayInfo] = useState(false);
  const [displayTitle, setDisplayTitle] = useState(true);

  const expand = (e) => {
    if (!displayInfo) {
      e.currentTarget.classList.add("active");
      setDisplayTitle(false);
      setDisplayInfo(true);
    }
  };
  const contract = () => {
    const activeSection = document.querySelector(".active");
    activeSection.classList.remove("active");
    setDisplayInfo(false);
    setDisplayTitle(true);
  };

  return (
    <div>
      <div className="main">
        <Navbar />
      </div>
      <div className="character">
        <div onClick={expand} className="country">
          <img src={cityofend} alt="city of end" />
          <Cityofendtitle title={displayTitle} />
          <Cityofendinfo displayStatus={displayInfo} onClickEvent={contract} />
        </div>
        <div onClick={expand} className="country seraphinecontainer">
          <img className="seraphine" src={seraphine} alt="seraphine" />
          <Seraphinetitle title={displayTitle} />
          <Seraphineinfo displayStatus={displayInfo} onClickEvent={contract} />
        </div>
        <div onClick={expand} className="country roamcontainer">
          <img className="roam" src={roam} alt="roam" />
          <Roamtitle title={displayTitle} />
          <Roaminfo displayStatus={displayInfo} onClickEvent={contract} />
        </div>
        <div onClick={expand} className="country timecontainer">
          <img className="time" src={time} alt="time" />
          <Timetitle title={displayTitle} />
          <Timeinfo displayStatus={displayInfo} onClickEvent={contract} />
        </div>
        <div onClick={expand} className="country moonislecontainer">
          <img className="moonisle" src={moonisle} alt="moon isle" />
          <Moontitle title={displayTitle} />
          <Mooninfo displayStatus={displayInfo} onClickEvent={contract} />
        </div>
      </div>
    </div>
  );
};

export default Character;
