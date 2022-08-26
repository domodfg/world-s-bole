import Navbar from "./components/Navbar.js";
import "./styles/character.css";
import cityofend from "./images/cityofend.jpeg";
import seraphine from "./images/seraphine.jpeg";
import roam from "./images/roam.jpeg";
import time from "./images/time.jpeg";
import moonisle from "./images/moonisle.jpg";

const Character = () => {
  const expand = (e) => {
    e.currentTarget.classList.toggle("active");
  };
  return (
    <div>
      <div className="main">
        <Navbar />
      </div>
      <div className="character">
        <div onClick={expand} className="country">
          <img src={cityofend} alt="city of end" />
          <p>終之國</p>
        </div>
        <div onClick={expand} className="country seraphinecontainer">
          <img className="seraphine" src={seraphine} alt="seraphine" />
          <p>賽拉斐爾</p>
        </div>
        <div onClick={expand} className="country roamcontainer">
          <img className="roam" src={roam} alt="roam" />
          <p>隆密</p>
        </div>
        <div onClick={expand} className="country timecontainer">
          <img className="time" src={time} alt="time" />
          <p>時之國</p>
        </div>
        <div onClick={expand} className="country moonislecontainer">
          <img className="moonisle" src={moonisle} alt="moon isle" />
          <p>新月聯邦</p>
        </div>
      </div>
    </div>
  );
};

export default Character;
