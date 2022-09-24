import React from "react";
import divider from "../../images/divider.png";
import close from "../../images/gameinfo/close.png";
import character2 from "../../images/character/character2.png";
import { Character2, Character2Stat, Character2Slider } from "./Character2.js";

const Seraphinetitle = (props) => {
  if (props.title) {
    return <p>賽拉斐爾</p>;
  }
};

const Seraphineinfo = (props) => {
  if (props.displayStatus) {
    return (
      <div className="characterpage">
        {props.displayChar && (
          <img
            className="charimage charimage2 animate__animated animate__slideInLeft"
            src={character2}
            alt="character"
          />
        )}
        <div className="countryinfo">
          {props.displayCountry && (
            <div>
              <div className="divider">
                <img src={divider} className="dividermirror" alt="divider" />
                <h2>賽拉斐爾</h2>
                <img src={divider} alt="divider" />
              </div>
              <p>
                又名：妖精之國，弓箭手橫行的國度，綠披風鬥士，悲劇王國......
                <br />
                被稱為妖精之舞的國家，由精靈王“艾爾斯蘭”在亞齊爾山脈下建立的一個部落，背靠生命之樹（後稱“世界樹”）逐漸成為平原上最大的國家（週期為1932個大陸年），也是歷史最長和最悠久的國家。
                據說妖精擁有和生命之樹溝通的能力，因而大陸上幾乎人人都有一個共識：精靈族是受到了世界樹庇佑的種族！在遠古時代（約0001-0860年左右），許多出生的妖精一到成年便會長出翅膀，優秀的遺傳基因使他們更容易飛往世界各處進行偵測和社交。因此一到了晚上，更是形成了一幅在大樹下伴隨無數飛舞著的妖精，螢火與樹葉一同發出著綠色的光芒既亮麗又璀璨人心的景象
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
                    className="charPortrait charPortrait2"
                    src={character2}
                    alt="character"
                  />
                </div>
              </div>
            </div>
          )}
          {props.displayChar && (
            <div className="characterinfo">
              <div className="characterinfoDesktop">
                <Character2 />
                <Character2Stat />
              </div>
              <Character2Slider />
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

export { Seraphinetitle, Seraphineinfo };
