import React from "react";
import uniqid from "uniqid";
import GachaPrize from "./GachaPrize.js";

const GachaItem = (props) => {
  return (
    <div className="text-center">
      <h3 className="gachaCongrat">恭喜你獲得了</h3>
      <div className="lootList">
        {props.items.map((item) => {
          const rarity =
            item.rarity === 6
              ? "URgameItem"
              : item.rarity === 5
              ? "SSRgameItem"
              : item.rarity === 4
              ? "SRgameItem"
              : item.rarity === 3
              ? "RgameItem"
              : "NgameItem";
          if (item === "prize1") {
            return <GachaPrize prize={1} key={uniqid()}  />;
          } else if (item === "prize3") {
            return <GachaPrize prize={3} key={uniqid()} />;
          } else if (item === "prize2") {
            return <GachaPrize prize={2} key={uniqid()}  />;
          } else if (item === "prize4") {
            return <GachaPrize prize={4} key={uniqid()} />;
          } else if (item === "prize5") {
            return <GachaPrize prize={5} key={uniqid()} />;
          } else
            return (
              <li className="gameItemsInfo animate__animated animate__flipInY" key={uniqid()}>
                <div className={`gameItemsHeader ${rarity}`}>
                  <p>
                    稀有度:
                    {`${"★".repeat(item.rarity) + "✩".repeat(6 - item.rarity)}`}
                  </p>
                </div>
                <img src={item.img} alt="Products" />
                <h3>{item.name}</h3>
              </li>
            );
        })}
      </div>
    </div>
  );
};

export default GachaItem;
