import React from "react";
import divider from "../../images/divider.png";
import close from "../../images/gameinfo/close.png";
import character5 from "../../images/character/character5.png";
import { Character5, Character5Stat, Character5Slider } from "./Character5.js";

const Moontitle = (props) => {
  if (props.title) {
    return <p>新月聯邦</p>;
  }
};

const Mooninfo = (props) => {
  if (props.displayStatus) {
    return (
      <div className="characterpage">
        {props.displayChar && (
          <img
            className="charimage charimage5 animate__animated animate__slideInLeft"
            src={character5}
            alt="character"
          />
        )}
        <div className="countryinfo">
          {props.displayCountry && (
            <div>
              <div className="divider">
                <img src={divider} className="dividermirror" alt="divider" />
                <h2>新月聯邦</h2>
                <img src={divider} alt="divider" />
              </div>
              <p>
                作為新生的一個屹立於半島上的國家，它的誕生和存在似乎是具有必然性。
                經過了長達千年的國境消耗戰後，一些精靈族戰士和魔法師開始對這場沒完沒了的戰事感到厭倦。也不知怎麼地，在中古時代結束的前夕（約2000年後），一群自發組織遠離戰爭類似“非暴力不合作“的隊伍，當中包含著人類魔法師和戰爭傷殘的精靈族戰士等，在高舉和平的主張下一路遊說到龐貝山脈下，當時精靈國因為對邊境的戰事以及對新生國家隆密隨時可能趁機來犯的防禦工事而無暇顧半島局勢，再加上獸人族一度陳兵於龐貝火山下，令到這支隊伍免去了後來被精靈族軍事法庭的審判和追究逃兵的罪責。
              </p>
              <div className="divider">
                <img src={divider} className="dividermirror" alt="divider" />
                <h2>角色資訊</h2>
                <img src={divider} alt="divider" />
              </div>
              <div className="charSelect">
                <div
                  className="portraitContainer"
                  onClick={props.characterOnClick}
                >
                  <img
                    className="charPortrait charPortrait5"
                    src={character5}
                    alt="character"
                  />
                </div>
              </div>
            </div>
          )}
          {props.displayChar && (
            <div className="characterinfo">
              <div className="characterinfoDesktop">
                <Character5 />
                <Character5Stat />
              </div>
              <Character5Slider />
            </div>
          )}
          <img
            src={close}
            alt="close"
            onClick={props.onClickEvent}
            className="close"
          />
        </div>
      </div>
    );
  }
};

export { Moontitle, Mooninfo };
