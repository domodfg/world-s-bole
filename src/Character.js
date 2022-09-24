import Navbar from "./components/Navbar/Navbar.js";
import "./styles/character.css";
import cityofend from "./images/country/cityofend.jpg";
import cityofendvid from "./images/country/cityofend.webm";
import seraphine from "./images/country/seraphine.jpg";
import seraphinevid from "./images/country/seraphine.webm";
import roam from "./images/country/roam.jpg";
import roamvid from "./images/country/roam.webm";
import time from "./images/country/time.jpg";
import timevid from "./images/country/time.webm";
import moonislevid from "./images/country/moonisle.webm";
import moonisle from "./images/country/moonisle.jpg";
import React, { useState } from "react";
import { Cityofendinfo, Cityofendtitle } from "./components/Character/Country1.js";
import { Seraphineinfo, Seraphinetitle } from "./components/Character/Country2.js";
import { Roaminfo, Roamtitle } from "./components/Character/Country3.js";
import { Timeinfo, Timetitle } from "./components/Character/Country4.js";
import { Mooninfo, Moontitle } from "./components/Character/Country5.js";

const Character = () => {
  const [displayInfo, setDisplayInfo] = useState({
    active: false,
    title: true,
    country: false,
  });

  const [displayChar, setDisplayChar] = useState({
    char1: false,
    char2: false,
    char3: false,
    char4: false,
    char5: false,
  });

  const expand = (e) => {
    if (
      !displayInfo.active &&
      Object.values(displayChar).every((value) => value === false)
    ) {
      e.currentTarget.classList.add("active");
      let copy = { ...displayInfo };
      copy.title = false;
      copy.active = true;
      copy.country = true;
      setDisplayInfo(copy);
    }
  };

  const contract = () => {
    const activeSection = document.querySelector(".active");
    activeSection.classList.remove("active");
    let copy = { ...displayInfo };
    let charcopy = { ...displayChar };
    copy.active = false;
    copy.title = true;
    charcopy.char1 = false;
    charcopy.char2 = false;
    charcopy.char3 = false;
    charcopy.char4 = false;
    charcopy.char5 = false;
    setDisplayInfo(copy);
    setDisplayChar(charcopy);
  };

  const showCharacterInfo = (charIndex) => {
    let copy = { ...displayInfo };
    let charcopy = { ...displayChar };
    charcopy[charIndex] = true;
    copy.country = false;
    setDisplayInfo(copy);
    setDisplayChar(charcopy);
  };

  return (
    <div>
      <div className="navContainer">
        <Navbar />
      </div>
      <div className="character">
        <div onClick={expand} className="country">
          <img className="countryBG" src={cityofend} alt="city of end" />
          <video poster={cityofend} autoPlay muted loop>
            <source src={cityofendvid} type="video/webm" />
          </video>
          <Cityofendtitle title={displayInfo.title} />
          <Cityofendinfo
            displayStatus={displayInfo.active}
            displayCountry={displayInfo.country}
            displayChar={displayChar.char1}
            onClickEvent={contract}
            characterOnClick={() => showCharacterInfo("char1")}
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
          <Seraphinetitle title={displayInfo.title} />
          <Seraphineinfo
            displayStatus={displayInfo.active}
            displayCountry={displayInfo.country}
            displayChar={displayChar.char2}
            onClickEvent={contract}
            characterOnClick={() => showCharacterInfo("char2")}
          />
        </div>
        <div onClick={expand} className="country roamcontainer">
          <img className="roam countryBG" src={roam} alt="roam" />
          <video className="roam" poster={roam} autoPlay muted loop>
            <source src={roamvid} type="video/webm" />
          </video>
          <Roamtitle title={displayInfo.title} />
          <Roaminfo
            displayStatus={displayInfo.active}
            displayCountry={displayInfo.country}
            displayChar={displayChar.char3}
            onClickEvent={contract}
            characterOnClick={() => showCharacterInfo("char3")}
          />
        </div>
        <div onClick={expand} className="country timecontainer">
          <img className="time countryBG" src={time} alt="time" />
          <video className="time" poster={time} autoPlay muted loop>
            <source src={timevid} type="video/webm" />
          </video>
          <Timetitle title={displayInfo.title} />
          <Timeinfo
            displayStatus={displayInfo.active}
            displayCountry={displayInfo.country}
            displayChar={displayChar.char4}
            onClickEvent={contract}
            characterOnClick={() => showCharacterInfo("char4")}
          />
        </div>
        <div onClick={expand} className="country moonislecontainer">
          <img className="moonisle countryBG" src={moonisle} alt="moon isle" />
          <video className="moonisle" poster={moonisle} autoPlay muted loop>
            <source src={moonislevid} type="video/webm" />
          </video>
          <Moontitle title={displayInfo.title} />
          <Mooninfo
            displayStatus={displayInfo.active}
            displayCountry={displayInfo.country}
            displayChar={displayChar.char5}
            onClickEvent={contract}
            characterOnClick={() => showCharacterInfo("char5")}
          />
        </div>
      </div>
    </div>
  );
};

export default Character;
