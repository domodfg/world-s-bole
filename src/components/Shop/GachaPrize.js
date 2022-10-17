import React from "react";
import gachachar1 from "../../images/shop/gachachar1.png";

const GachaPrize = () => {
  return (
    <div>
      <li className="gameItemsInfo UR">
        <h3>獲得稀有角色</h3>
        <img className="URprize" src={gachachar1} alt="gacha character 1" />
      </li>
    </div>
  );
};

export default GachaPrize;
