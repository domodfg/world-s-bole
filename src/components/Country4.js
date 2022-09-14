import React from "react";
import divider from "../images/divider.png";
import close from "../images/gameinfo/close.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import character4 from "../images/character/character4.png";

const Timetitle = (props) => {
  if (props.title) {
    return <p>時之國</p>;
  }
};

const Timeinfo = (props) => {
  if (props.displayStatus) {
    return (
      <div className="characterpage">
        {props.displayChar && (
          <img
            className="charimage charimage4 animate__animated animate__slideInLeft"
            src={character4}
            alt="character"
          />
        )}
        <div className="countryinfo">
          {props.displayCountry && (
            <div>
              <div className="divider">
                <img src={divider} className="dividermirror" alt="divider" />
                <h2>時之國</h2>
                <img src={divider} alt="divider" />
              </div>
              <p>
                相傳誕生在大陸西南逢魔海岸上的逢魔村，原本是一條經營著漁業和海上商貿的村落。通過海上經商而慢慢累積財富變得越來越富有的商人和村民，開始對外部世界有了擴張的慾望。
                <br />
                直到遠古時代的某天，一隊路過詛咒森林和魔君洞的逢魔商隊，不知道是意外亦或者是天賜良機，竟在這兩個地方同時得到了兩本經文：一本叫《時辰傳》和《魔君經文》的禁忌書籍！商隊很快便帶回去家鄉作深入研究，繼而打開了逢魔人點擊起使用魔法力量的科技樹大門。
                但萬萬沒想到的是，這兩本書應該劃分成為上下冊：《時辰傳》所記載的魔法知識和技能只是為了方便打開下一冊中召喚魔神奧比斯降臨的通道...
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
                    className="charPortrait charPortrait4"
                    src={character4}
                    alt="character"
                  />
                </div>
              </div>
            </div>
          )}
          {props.displayChar && (
            <div className="characterinfo">
              <div className="charactertitle">
                <h2>元素魔女</h2>
                <p>CV配音：東山奈央</p>
              </div>
              <h3>莎缇娜</h3>
              <div className="charDescription">
                <p>
                  莎緹娜是一位極具魔法天賦能力的少女，她的母親是人稱時之國的最高魔法天才皇帝：魔女梅杜莎！
                </p>
                <p>
                  性格倔强，個性率直的她，很快就成為了一名聞名遐邇的魔女實習生，並且擅長使用各種燃燒魔法。
                </p>
                <p>
                  不過因為大家閨秀的生活習慣，養成了不愛說話和貪錢的小毛病，所以跟隊友的相處好像也並不和睦？
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
                  <p>25</p>
                  <p>耐久 </p>
                  <p>36</p>
                  <p>敏捷 </p>
                  <p>97</p>
                  <p>心靈</p>
                  <p>186</p>
                  <p>知識 </p>
                  <p>174</p>
                  <p>神性</p>
                  <p>36</p>
                </div>
                <div className="charTalent">
                  <p className="text-left">武力值</p>
                  <ProgressBar variant="warning" now={11} />
                  <p className="text-left">魔力值</p>
                  <ProgressBar variant="primary" now={89} />
                  <p className="text-left">速度值</p>
                  <ProgressBar variant="info" now={36} />
                  <p className="text-left">幸運值</p>
                  <ProgressBar variant="danger" now={29} />
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

export { Timetitle, Timeinfo };
