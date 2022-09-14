import React from "react";
import divider from "../images/divider.png";
import close from "../images/gameinfo/close.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import character5 from "../images/character/character5.png";

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
            className="charimage animate__animated animate__slideInLeft"
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
              <div className="charactertitle">
                <h2>機械工程師</h2>
                <p>CV配音：花澤香菜</p>
              </div>
              <h3>艾曼紐·麗</h3>
              <div className="charDescription">
                <p>
                  艾曼紐在學校裡的成績並不怎麼樣，因為她一開始就很討厭數學和工程。
                </p>
                <p>
                  不知道怎麼地，工程學與她的命運卻緊密相連，這可能是因為父母的緣故，使她的美術生生涯就此終結。
                </p>
                <p>
                  但可不要小看這位恬靜的文科生哦！即使在運用機械方面，她還是有十足的把握去用科學對付魔法！
                </p>
                <p>
                  平時跟在她背後的這隻機器人......不對，應該是天線寶寶？看來並不是什麼好惹的角色。
                </p>
              </div>

              <div className="divider">
                <img src={divider} className="dividermirror" alt="divider" />
                <h2 className="charAbility">初始天賦/綜合平均值</h2>
                <img src={divider} alt="divider" />
              </div>
              <div className="charStats">
                <div className="statsGrid">
                  <p>力量</p>
                  <p>65</p>
                  <p>耐久 </p>
                  <p>70</p>
                  <p>敏捷 </p>
                  <p>81</p>
                  <p>心靈</p>
                  <p>121</p>
                  <p>知識 </p>
                  <p>180</p>
                  <p>神性</p>
                  <p>123</p>
                </div>
                <div className="charTalent">
                  <p className="text-left">武力值</p>
                  <ProgressBar variant="warning" now={25} />
                  <p className="text-left">魔力值</p>
                  <ProgressBar variant="primary" now={69} />
                  <p className="text-left">速度值</p>
                  <ProgressBar variant="info" now={33} />
                  <p className="text-left">幸運值</p>
                  <ProgressBar variant="danger" now={78} />
                </div>
              </div>
              <img
                src={close}
                alt="close"
                onClick={props.onClickEvent}
                className="close"
              />
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
