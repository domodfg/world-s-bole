import map from "../images/map.jpg";
import area from "../images/area.jpg";
import city from "../images/city.jpg";
import dungeon from "../images/dungeon.jpg";
import field from "../images/field.jpg";
import React, { useState } from "react";

const Map = () => {
  const [utrue, setUtrue] = useState(<img src={map} alt="map of Utrue" />);

  const changeMap = (map) => {
    setUtrue(<img src={map} alt="map of Utrue" />);
  };

  return (
    <div className="map">
      <h2>探索烏爾提大陸</h2>
      <div className="mapdisplay">
        <div className="empty"></div>
        {utrue}
        <div className="legend">
          <button onClick={() => changeMap(area)}>地區</button>
          <button onClick={() => changeMap(city)}>城市</button>
          <button onClick={() => changeMap(field)}>原野</button>
          <button onClick={() => changeMap(dungeon)}>地下城</button>
          <button onClick={() => changeMap(map)}>重置</button>
        </div>
      </div>
    </div>
  );
};

export default Map;
