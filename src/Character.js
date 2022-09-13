import Navbar from "./components/Navbar.js";
import "./styles/character.css";
import cityofend from "./images/country/cityofend.jpg";
import cityofendvid from "./images/country/cityofend.webm";
import seraphine from "./images/country/seraphine.jpg";
import seraphinevid from "./images/country/seraphine.webm";
import roam from "./images/country/roam.jpg";
import roamvid from "./images/country/roam.webm";
import time from "./images/country/time.jpg";
import moonislevid from "./images/country/moonisle.webm";
import moonisle from "./images/country/moonisle.jpg";
import React, { useState } from "react";
import { Cityofendinfo, Cityofendtitle } from "./components/Country1.js";
import { Seraphineinfo, Seraphinetitle } from "./components/Country2.js";
import { Roaminfo, Roamtitle } from "./components/Country3.js";
import { Timeinfo, Timetitle } from "./components/Country4.js";
import { Mooninfo, Moontitle } from "./components/Country5.js";

const Character = () => {
  const [displayInfo, setDisplayInfo] = useState(false);
  const [displayTitle, setDisplayTitle] = useState(true);
  const [displayCountry, setDisplayCountry] = useState(true);
  const [displayChar, setDisplayChar] = useState(false);
  const [displayChar2, setDisplayChar2] = useState(false);
  const [displayChar3, setDisplayChar3] = useState(false);

  const expand = (e) => {
    if (!displayInfo && !displayChar) {
      e.currentTarget.classList.add("active");
      setDisplayTitle(false);
      setDisplayInfo(true);
      setDisplayCountry(true);
    }
  };
  const contract = () => {
    const activeSection = document.querySelector(".active");
    activeSection.classList.remove("active");
    setDisplayInfo(false);
    setDisplayChar(false);
    setDisplayChar2(false);
    setDisplayChar3(false);
    setDisplayTitle(true);
  };

  const showCharacterInfo = (number) => {
    if (!displayChar) {
      if (number === 1) {
        setDisplayChar(true);
      } else if (number === 2) {
        setDisplayChar2(true);
      } else if (number === 3) {
        setDisplayChar3(true);
      }
      setDisplayCountry(false);
    }
  };

  return (
    <div>
      <div className="main">
        <Navbar />
      </div>
      <div className="character">
        <div onClick={expand} className="country">
          <img className="countryBG" src={cityofend} alt="city of end" />
          <video poster={cityofend} autoPlay muted loop>
            <source src={cityofendvid} type="video/webm" />
          </video>
          <Cityofendtitle title={displayTitle} />
          <Cityofendinfo
            displayStatus={displayInfo}
            onClickEvent={contract}
            characterOnClick={() => showCharacterInfo(1)}
            displayCountry={displayCountry}
            displayChar={displayChar}
          />
        </div>
        <div onClick={expand} className="country seraphinecontainer">
          <img
            className="seraphine countryBG"
            src={seraphine}
            alt="seraphine"
          />
          <video className="seraphine" poster={seraphine} autoPlay muted loop>
            <source src={seraphinevid} type="video/webm" />
          </video>
          <Seraphinetitle title={displayTitle} />
          <Seraphineinfo
            displayStatus={displayInfo}
            onClickEvent={contract}
            characterOnClick={() => showCharacterInfo(2)}
            displayCountry={displayCountry}
            displayChar={displayChar2}
          />
        </div>
        <div onClick={expand} className="country roamcontainer">
          <img className="roam countryBG" src={roam} alt="roam" />
          <video className="roam" poster={roam} autoPlay muted loop>
            <source src={roamvid} type="video/webm" />
          </video>
          <Roamtitle title={displayTitle} />
          <Roaminfo
            displayStatus={displayInfo}
            onClickEvent={contract}
            characterOnClick={() => showCharacterInfo(3)}
            displayCountry={displayCountry}
            displayChar={displayChar3}
          />
        </div>
        <div onClick={expand} className="country timecontainer">
          <img className="time countryBG" src={time} alt="time" />
          <video className="time" poster={time} autoPlay muted loop></video>
          <Timetitle title={displayTitle} />
          <Timeinfo displayStatus={displayInfo} onClickEvent={contract} />
        </div>
        <div onClick={expand} className="country moonislecontainer">
          <img className="moonisle countryBG" src={moonisle} alt="moon isle" />
          <video className="moonisle" poster={moonisle} autoPlay muted loop>
            <source src={moonislevid} type="video/webm" />
          </video>
          <Moontitle title={displayTitle} />
          <Mooninfo displayStatus={displayInfo} onClickEvent={contract} />
        </div>
      </div>
    </div>
  );
};

export default Character;
