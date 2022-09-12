import Attack from "../images/attack.mov";
import Guard from "../images/guard.mov";
import Parry from "../images/parry.mov";
import divider from "../images/divider.png";
import React, { useState } from "react";

const Battlesystem = () => {
  const attack = {
      methodDescription: "運用不同的武器和戰技，削減敵人的體力。",
      battleVideo: Attack,
    },
    guard = {
      methodDescription: "使用防禦抵擋敵人猛烈的攻勢，等待反擊的機會。",
      battleVideo: Guard,
    },
    parry = {
      methodDescription:
        "在適當的時機進行格檔，可使敵人失衡，制造出有利的輸出空間。",
      battleVideo: Parry,
    };

  const [battleMethod, setBattleMethod] = useState({
    Description: attack.methodDescription,
    Video: (
      <video autoPlay muted loop>
        <source src={attack.battleVideo} type="video/mp4" />
      </video>
    ),
  });

  const changeMethod = (description, method) => {
    setBattleMethod({
      Description: description,
      Video: <video autoPlay muted loop src={method} type="video/mov" />,
    });
  };
  return (
    <>
      <div className="battlesystem">
        <div className="battlesystemtitle">
          <div className="divider">
            <img src={divider} className="dividermirror" alt="divider" />
            <h2>戰 鬥 系 統</h2>
            <img src={divider} alt="divider" />
          </div>
        </div>
        <div className="battlemethod">
          <button
            onClick={() =>
              changeMethod(attack.methodDescription, attack.battleVideo)
            }
          >
            攻擊
          </button>
          <button
            onClick={() =>
              changeMethod(guard.methodDescription, guard.battleVideo)
            }
          >
            防禦
          </button>
          <button
            onClick={() =>
              changeMethod(parry.methodDescription, parry.battleVideo)
            }
          >
            格檔
          </button>
        </div>
        <div className="battlemethoddetail">
          <div className="battledescription">
            <p>{battleMethod.Description}</p>
          </div>
          <div className="battlevideo">
            {battleMethod.Video}
          </div>
        </div>
      </div>
    </>
  );
};

export default Battlesystem;
