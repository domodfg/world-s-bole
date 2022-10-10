import Attack from "../images/battlesystem/attack.mov";
import Guard from "../images/battlesystem/guard.mov";
import Parry from "../images/battlesystem/parry.mov";
import React, { useState, useEffect } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

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

  useEffect(() => {
    toggleActive(0);
  },[]);

  function toggleActiveStyles(index) {
    if(battleMethod.methods[index] === battleMethod.activeObject){
      return "gamesystembutton systembtnactive";
    } else{
      return "gamesystembutton systembtninactive";
    }
  }

  return (
    <>
      <div className="battlesystem" id="battlesystem">
        <div className="leaveshadow">
          <div className="systemdivideline"></div>
          <AnimationOnScroll
            animateIn="animate__fadein"
            animateOnce="true"
            className="systemtitle"
            duration={1.5}
            offset={100}
          >
            <h1>戰 鬥 系 統</h1>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadein"
            animateOnce="true"
            className="battlemethod"
            duration={1.5}
            offset={100}
          >      
              {battleMethod.methods.map((elements, index) => (
                <button
                  key={index}
                  className={toggleActiveStyles(index)}
                  onClick={()=>{
                    toggleActive(index);
                  }}
                >{battleMethod.methods[index].name}</button>
              ))}
          </AnimationOnScroll>
          <div className="battlemethoddetail">
            <AnimationOnScroll
              animateIn="animate__fadeinleft"
              animateOnce="true"
              className="battledescription"
              duration={1.5}
              offset={300}
            >
              <div className="textbox">
                <p>{battleMethod.activeObject.methodDescription}</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeinright"
              animateOnce="true"
              className="battlevideo"
              duration={1.5}
              offset={300}
            >
              {battleMethod.activeObject.battleVideo}
            </AnimationOnScroll>                
          </div>
          <div className="systemdivideline"></div>
        </div>
      </div>
    </>
  );
};

export default Battlesystem;
