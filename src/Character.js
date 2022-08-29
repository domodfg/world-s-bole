import Navbar from "./components/Navbar.js";
import "./styles/character.css";
import cityofend from "./images/country/cityofend.jpg";
import cityofendvid from "./images/country/cityofend.webm";
import seraphine from "./images/country/seraphine.jpg";
import seraphinevid from "./images/country/seraphine.webm";
import roam from "./images/country/roam.jpg";
import roamvid from "./images/country/roam.webm";
import time from "./images/country/time.jpg";
import timevid from "./images/country/time.webm";
import moonisle from "./images/country/moonisle.jpg";
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
          <video poster={cityofend} autoPlay muted loop>
            <source src={cityofendvid} type="video/webm" />
          </video>
          <Cityofendtitle title={displayTitle} />
          <Cityofendinfo displayStatus={displayInfo} onClickEvent={contract} />
        </div>
        <div onClick={expand} className="country seraphinecontainer">
          <img className="seraphine" src={seraphine} alt="seraphine" />
          <video className="seraphine" poster={seraphine} autoPlay muted loop>
            <source src={seraphinevid} type="video/webm" />
          </video>
          <Seraphinetitle title={displayTitle} />
          <Seraphineinfo displayStatus={displayInfo} onClickEvent={contract} />
        </div>
        <div onClick={expand} className="country roamcontainer">
          <img className="roam" src={roam} alt="roam" />
          <video className="roam" poster={roam} autoPlay muted loop>
            <source src={roamvid} type="video/webm" />
          </video>
          <Roamtitle title={displayTitle} />
          <Roaminfo displayStatus={displayInfo} onClickEvent={contract} />
        </div>
        <div onClick={expand} className="country timecontainer">
          <img className="time" src={time} alt="time" />
          <video className="time" poster={time} autoPlay muted loop>
            <source src={timevid} type="video/webm" />
          </video>
          <Timetitle title={displayTitle} />
          <Timeinfo displayStatus={displayInfo} onClickEvent={contract} />
        </div>
        <div onClick={expand} className="country moonislecontainer">
          <img className="moonisle" src={moonisle} alt="moon isle" />
          <video
            className="moonisle"
            poster={moonisle}
            autoPlay
            muted
            loop
          ></video>
          <Moontitle title={displayTitle} />
          <Mooninfo displayStatus={displayInfo} onClickEvent={contract} />
        </div>
      </div>
    </div>
  );
};

export default Character;
