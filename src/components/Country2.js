import React from "react";
import divider from "../images/divider.png";
import close from "../images/gameinfo/close.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import character2 from "../images/character/character2.png";

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
            className="charimage animate__animated animate__slideInLeft"
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
                <h2>心靈弓兵</h2>
                <p>CV配音：澤城美雪</p>
              </div>
              <h3>奧蘭多·奇亞娜</h3>
              <div className="charDescription">
                <p>
                  奇亞娜是一位出色的弓箭手，她曾經在大戰中打退過魔君騎兵的一個排，而且很擅長游擊和地道戰。
                </p>
                <p>
                  平時最大的樂趣是在出戰的前夕唱歌，以歌聲激勵身邊的戰友，向世界樹祈禱為他們贏得取得勝利的加護。
                </p>
                <p>
                  即便是上年紀了，但她的身體依然輕盈如燕，在奔跑和作戰的過程中都能夠做到疾如風，徐如林！
                </p>
                <p>
                  長期生活在森林里的她，已經懂得運用氣候和叢林做好埋伏敵人的準備，務求精準地射擊並且百發百中！
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
                  <p>102</p>
                  <p>耐久 </p>
                  <p>69</p>
                  <p>敏捷 </p>
                  <p>161</p>
                  <p>心靈</p>
                  <p>138</p>
                  <p>知識 </p>
                  <p>109</p>
                  <p>神性</p>
                  <p>87</p>
                </div>
                <div className="charTalent">
                  <p className="text-left">武力值</p>
                  <ProgressBar variant="warning" now={64} />
                  <p className="text-left">魔力值</p>
                  <ProgressBar variant="primary" now={72} />
                  <p className="text-left">速度值</p>
                  <ProgressBar variant="info" now={60} />
                  <p className="text-left">幸運值</p>
                  <ProgressBar variant="danger" now={45} />
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

export { Seraphinetitle, Seraphineinfo };
