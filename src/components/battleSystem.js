import Attack from "../images/attack.mov";
import Guard from "../images/guard.mov";
import Parry from "../images/parry.mov";
import divider from "../images/divider.png";
import React, { useState } from "react";

const Battlesystem = () => {

  const [battleMethod, setBattleMethod] = useState({
    activeObject: {
      name: "攻擊",
      methodDescription: "運用不同的武器和戰技，削減敵人的體力。",
      battleVideo:(
      <video autoPlay muted loop>
        <source src={Attack} type="video/mp4" />
      </video>
      )
    },
    methods: [{
      name: "攻擊",
      methodDescription: "運用不同的武器和戰技，削減敵人的體力。",
      battleVideo:
      <video autoPlay muted loop src={Attack} type="video/mov" />,
    }, {
      name: "防禦",
      methodDescription: "使用防禦抵擋敵人猛烈的攻勢，等待反擊的機會。",
      battleVideo:
      <video autoPlay muted loop src={Guard} type="video/mov" />,
    }, {
      name: "格檔",
      methodDescription:
        "在適當的時機進行格檔，可使敵人失衡，制造出有利的輸出空間。",
      battleVideo:
      <video autoPlay muted loop src={Parry} type="video/mov" />,
    }]
  });

  function toggleActive(index) {
    setBattleMethod({...battleMethod, activeObject: battleMethod.methods[index]});
  }

  function toggleActiveStyles(index) {
    if(battleMethod.methods[index] === battleMethod.activeObject){
      return "gamesystembutton active";
    } else{
      return "gamesystembutton inactive";
    }
  }

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
          {battleMethod.methods.map((elements, index) => (
            <button
              key={index}
              className={toggleActiveStyles(index)}
              onClick={()=>{
                toggleActive(index);
              }}
            >{battleMethod.methods[index].name}</button>
          ))}
        </div>
        <div className="battlemethoddetail">
          <div className="battledescription">
            <div className="textbox">
              <p>{battleMethod.activeObject.methodDescription}</p>
            </div>
          </div>
          <div className="battlevideo">
            {battleMethod.activeObject.battleVideo}
          </div>
        </div>
      </div>
    </>
  );
};

export default Battlesystem;
