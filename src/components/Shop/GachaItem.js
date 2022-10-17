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
          if (item === "prize") return <GachaPrize />;
          else
            return (
              <li className="gameItemsInfo" key={uniqid()}>
                <div className={`gameItemsHeader ${rarity}`}>
                  <p>
                    稀有度:
                    {`${"★".repeat(item.rarity) + "✩".repeat(6 - item.rarity)}`}
                  </p>
                  <p className="ilevel">等級需求：{item.level}</p>
                </div>
                <img src={item.img} alt="Products" />
                <h3>{item.name}</h3>
                <div className="gameItemsDes">
                  <p>{item.description}</p>
                </div>
              </li>
            );
        })}
      </div>
    </div>
  );
};

export default GachaItem;
