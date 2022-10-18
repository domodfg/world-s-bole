import React from "react";
import uniqid from "uniqid";
import gachachar1 from "../../images/shop/gachachar1.png";
import gachachar2 from "../../images/shop/gachachar2.png";
import gachachar2_5 from "../../images/shop/gachachar2-5.png";
import gachachar3 from "../../images/shop/gachachar3.png";
import gachachar4 from "../../images/shop/gachachar4.png";

const GachaPrize = (props) => {
  const randomNumber = Math.floor(Math.random() * 2) + 1;
  return (
    <div key={uniqid()}>
      <li className="gameItemsInfo UR">
        <h3>獲得稀有角色</h3>
        {props.prize === 1 && (
          <img className="URprize" src={gachachar1} alt="gacha character 1" />
        )}
        {props.prize === 2 && randomNumber === 1 && (
          <img
            className="URprize gachaChar2"
            src={gachachar2}
            alt="gacha character 2"
          />
        )}
        {props.prize === 2 && randomNumber === 2 && (
          <img
            className="URprize gachaChar2_5"
            src={gachachar2_5}
            alt="gacha character 2.5"
          />
        )}
        {props.prize === 3 && randomNumber === 1 && (
          <img
            className="URprize gachaChar3"
            src={gachachar3}
            alt="gacha character 3"
          />
        )}
        {props.prize === 3 && randomNumber === 2 && (
          <img
            className="URprize gachaChar4"
            src={gachachar4}
            alt="gacha character 4"
          />
        )}
      </li>
    </div>
  );
};

export default GachaPrize;
