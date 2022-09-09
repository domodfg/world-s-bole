import map from "../images/map/map.jpeg";
import area from "../images/map/area.jpeg";
import city from "../images/map/city.jpeg";
import dungeon from "../images/map/dungeon.jpeg";
import field from "../images/map/field.jpeg";
import divider from "../images/divider.png";
import React, { useState } from "react";

const Map = () => {
  const [utrue, setUtrue] = useState(<img src={map} alt="map of Utrue" />);

  const changeMap = (map) => {
    setUtrue(<img src={map} alt="map of Utrue" />);
  };

  return (
    <div className="map">
      <div className="divider">
        <img src={divider} className="dividermirror" alt="divider" />
        <h2>探索烏提爾大陸</h2>
        <img src={divider} alt="divider" />
      </div>
      <div className="mapdisplay">
        <div className="empty"></div>
        {utrue}
        <div className="legend">
          <button onClick={() => changeMap(area)}>地區</button>
          <button onClick={() => changeMap(city)}>城市</button>
          <button onClick={() => changeMap(field)}>原野</button>
          <button onClick={() => changeMap(dungeon)}>遺跡</button>
          <button onClick={() => changeMap(map)}>重置</button>
        </div>
      </div>
    </div>
  );
};

export default Map;
