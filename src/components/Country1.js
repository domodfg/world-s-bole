import React from "react";
import divider from "../images/divider.png";
import close from "../images/gameinfo/close.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import character1 from "../images/character/character1.png";

const Cityofendtitle = (props) => {
  if (props.title) {
    return <p>終之國</p>;
  }
};

const Cityofendinfo = (props) => {
  if (props.displayStatus) {
    return (
      <div className="characterpage">
        {props.displayChar && (
          <img
            className="charimage animate__animated animate__slideInLeft"
            src={character1}
            alt="character"
          />
        )}
        <div className="countryinfo">
          {props.displayCountry && (
            <div>
              <div className="divider">
                <img src={divider} className="dividermirror" alt="divider" />
                <h2>終之國</h2>
                <img src={divider} alt="divider" />
              </div>
              <p>
                又稱：白色國度, 冰雪之國
                <br />
                以盡頭山脈為發源地，終結高原為主要領土，國民視末日火山為不祥象徵的國家。該國境內大部分領土終年被冰雪覆蓋，建國大約有1586個大陸曆年，人口98%以上是由人類族構成，只有極其一小部分是從南方流亡或遷移定居的精靈和獸人。
                <br />{" "}
                該國崇拜實用主義，更多地是因為地形文化的原因，城鎮和鄉村民風彪悍，平民尚武，認為”劍和武力就是一切！“，這種說法漸漸深入到國民的骨髓，幾乎人手配備一把長劍。至於個人更是崇尚武力”PK“，無論在城鎮抑或者在外面，單挑狀況時有發生......
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
                    className="charPortrait"
                    src={character1}
                    alt="character"
                  />
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
          {props.displayChar && (
            <div className="characterinfo">
              <div className="charactertitle">
                <h2>拂曉劍士</h2>
                <p>CV配音：福山潤</p>
              </div>
              <h3>卡拉奇·扎比</h3>
              <div className="charDescription">
                <p>
                  卡拉奇出生在人類終之國內鹽湖城的一個清晨，因此被稱為“破曉”。
                </p>
                <p>
                  從小的志願是為了當上一個有名氣的劍士，為人熱心正直，遇見不公平的事情會拔劍相助。
                </p>
                <p>
                  雖然家境一般而且很窮，但他沒有氣餒，為了達成目標，甘願一邊苦修劍術一邊打工和冒險？
                </p>
                <p>
                  擁有堅韌不拔的意志，不怕被人嘲笑年輕，少年意氣風發，似乎會是個團隊裡的好幫手！
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
                  <p>185</p>
                  <p>耐久 </p>
                  <p>98</p>
                  <p>敏捷 </p>
                  <p>78</p>
                  <p>心靈</p>
                  <p>30</p>
                  <p>知識 </p>
                  <p>98</p>
                  <p>神性 </p>
                  <p>106</p>
                </div>
                <div className="charTalent">
                  <p className="text-left">武力值</p>
                  <ProgressBar variant="warning" now={81} />
                  <p className="text-left">魔力值</p>
                  <ProgressBar variant="primary" now={12} />
                  <p className="text-left">速度值</p>
                  <ProgressBar variant="info" now={36} />
                  <p className="text-left">幸運值</p>
                  <ProgressBar variant="danger" now={42} />
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
        </div>
      </div>
    );
  }
};

export { Cityofendinfo, Cityofendtitle };
