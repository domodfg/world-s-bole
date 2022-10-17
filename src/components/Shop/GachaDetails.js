import React, { useState, useEffect } from "react";
import { gameItem } from "./gameProduct.js";
import GachaItem from "./GachaItem.js";
import GachaInfo1 from "./Gacha1.js";
import GachaInfo3 from "./Gacha3.js";

const GachaDetail = (props) => {
  const [lootList, setLoot] = useState();
  const draw = (times) => {
    const URweapon = gameItem.filter((item) => item.rarity === 6);
    const SRweapon = gameItem.filter(
      (item) => item.rarity >= 4 && item.rarity <= 5
    );
    const Rweapon = gameItem.filter(
      (item) => item.rarity >= 2 && item.rarity <= 3
    );
    const lootArray = [];
    const drawOneTimes = () => {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      switch (true) {
        case randomNumber >= 1 && randomNumber <= 84:
          const R = Rweapon[Math.floor(Math.random() * Rweapon.length)];
          lootArray.push(R);
          break;
        case randomNumber >= 85 && randomNumber <= 94:
          const SR = SRweapon[Math.floor(Math.random() * SRweapon.length)];
          lootArray.push(SR);
          break;
        case randomNumber >= 95 && randomNumber <= 99:
          const UR = URweapon[Math.floor(Math.random() * URweapon.length)];
          lootArray.push(UR);
          break;
        case randomNumber === 100:
          lootArray.push("prize");
          break;
        default:
          return;
      }
      setLoot(<GachaItem items={lootArray} />);
    };

    for (let i = 0; i < times; i++) {
      drawOneTimes();
    }
  };

  return (
    <div>
      {props.gachaType === 1 && <GachaInfo1 lootList={lootList} draw={draw} />}
      {props.gachaType === 3 && <GachaInfo3 lootList={lootList} draw={draw} />}
    </div>
  );
};

export default GachaDetail;
