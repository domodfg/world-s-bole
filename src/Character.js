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
  const [displayChar, setDisplayChar] = useState({
    char1: false,
    char2: false,
    char3: false,
    char4: false,
    char5: false,
  });

  const expand = (e) => {
    if (
      !displayInfo &&
      Object.values(displayChar).every((value) => value === false)
    ) {
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
    setDisplayChar({
      char1: false,
      char2: false,
      char3: false,
      char4: false,
      char5: false,
    });
    setDisplayTitle(true);
  };

  const showCharacterInfo = (charIndex) => {
    let copy = { ...displayChar };
    copy[charIndex] = true;
    setDisplayChar(copy);
    setDisplayCountry(false);
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
            characterOnClick={() => showCharacterInfo("char1")}
            displayCountry={displayCountry}
            displayChar={displayChar.char1}
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
            characterOnClick={() => showCharacterInfo("char2")}
            displayCountry={displayCountry}
            displayChar={displayChar.char2}
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
            characterOnClick={() => showCharacterInfo("char3")}
            displayCountry={displayCountry}
            displayChar={displayChar.char3}
          />
        </div>
        <div onClick={expand} className="country timecontainer">
          <img className="time countryBG" src={time} alt="time" />
          <video className="time" poster={time} autoPlay muted loop></video>
          <Timetitle title={displayTitle} />
          <Timeinfo
            displayStatus={displayInfo}
            onClickEvent={contract}
            characterOnClick={() => showCharacterInfo("char4")}
            displayCountry={displayCountry}
            displayChar={displayChar.char4}
          />
        </div>
        <div onClick={expand} className="country moonislecontainer">
          <img className="moonisle countryBG" src={moonisle} alt="moon isle" />
          <video className="moonisle" poster={moonisle} autoPlay muted loop>
            <source src={moonislevid} type="video/webm" />
          </video>
          <Moontitle title={displayTitle} />
          <Mooninfo
            displayStatus={displayInfo}
            onClickEvent={contract}
            characterOnClick={() => showCharacterInfo("char5")}
            displayCountry={displayCountry}
            displayChar={displayChar.char5}
          />
        </div>
      </div>
    </div>
  );
};

export default Character;
