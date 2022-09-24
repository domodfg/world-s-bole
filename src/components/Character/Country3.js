import React from "react";
import divider from "../../images/divider.png";
import close from "../../images/gameinfo/close.png";
import character3 from "../../images/character/character3.png";
import { Character3, Character3Stat, Character3Slider } from "./Character3";

const Roamtitle = (props) => {
  if (props.title) {
    return <p>隆密</p>;
  }
};

const Roaminfo = (props) => {
  if (props.displayStatus) {
    return (
      <div className="characterpage">
        {props.displayChar && (
          <img
            className="charimage charimage3 animate__animated animate__slideInLeft"
            src={character3}
            alt="character"
          />
        )}
        <div className="countryinfo">
          {props.displayCountry && (
            <div>
              <div className="divider">
                <img src={divider} className="dividermirror" alt="divider" />
                <h2>隆密</h2>
                <img src={divider} alt="divider" />
              </div>
              <p>
                1522年，獸人族在人類的殖民管治下宣布建國，經過了約三十年的抗爭，人類方最終因為補給不足（基本上，哈契爾山脈的阻擋和熱帶氣候的不適應，使人類駐軍得不到充足的後勤保障）而宣布放棄並且承認隆密國。{" "}
                <br />
                長期的森林砍伐和建築工藝的提升，再加上有精靈國輸出的技術和知識，還有政治上的撐腰，獸人開始懂得運用長矛和獵犬，巨斧等武器，組織軍隊的能力和建築技術也都得到了巨大的進步。經過兩百年來的發展，隆密國國力達到頂峰，首都德希爾完全由木頭組建而成，因此又被成為“森林里的城堡”。
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
                    className="charPortrait charPortrait3"
                    src={character3}
                    alt="character"
                  />
                </div>
              </div>
            </div>
          )}
          {props.displayChar && (
            <div className="characterinfo">
              <div className="characterinfoDesktop">
                <Character3 />
                <Character3Stat />
              </div>
              <Character3Slider />
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

export { Roaminfo, Roamtitle };
