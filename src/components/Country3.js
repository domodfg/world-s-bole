import React from "react";
import divider from "../images/divider.png";
import close from "../images/gameinfo/close.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import character3 from "../images/character/character3.png";

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
            className="charimage animate__animated animate__slideInLeft"
            src={character3}
            alt="character"
          />
        )}
        <div className="countryinfo">
          {props.displayCountry && (
            <div>
              {" "}
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
                <h2>狂野獵犬</h2>
                <p>CV配音：小林沙苗</p>
              </div>
              <h3>圖夫</h3>
              <div className="charDescription">
                <p>外表看起來兇猛冷酷，但內心其實是非常小孩子氣的大叔？</p>
                <p>
                  因為生活的地方長期在森林裏頭，所以對外部世界很感興趣，好奇心旺盛的他，會被隊友當作是吉祥物。
                </p>
                <p>
                  擅長用利爪和尖牙粉碎敵人的咽喉！不過，對自己的隊友卻是出奇地溫和，因此是隻能幹的...忠犬？？
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
                  <p>197</p>
                  <p>耐久 </p>
                  <p>158</p>
                  <p>敏捷 </p>
                  <p>126</p>
                  <p>心靈</p>
                  <p>60</p>
                  <p>知識 </p>
                  <p>15</p>
                  <p>神性</p>
                  <p>?</p>
                </div>
                <div className="charTalent">
                  <p className="text-left">武力值</p>
                  <ProgressBar variant="warning" now={90} />
                  <p className="text-left">魔力值</p>
                  <ProgressBar variant="primary" now={8} />
                  <p className="text-left">速度值</p>
                  <ProgressBar variant="info" now={56} />
                  <p className="text-left">幸運值</p>
                  <ProgressBar variant="danger" now={30} />
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

export { Roaminfo, Roamtitle };
