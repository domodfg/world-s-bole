import dreadrealm from "../images/dreadrealm.jpg";
import wrathofthedragon from "../images/wrathofthedragon.jpeg";
import floatingland from "../images/floatingland.jpg";
import runemagic from "../images/runemagic.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const Gameinfo = () => {
  return (
    <div className="content">
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
        className="gameinfocard"
        duration={0.7}
        offset={300}
      >
        <div className="imagecontainer">
          <img src={dreadrealm} className="cardimage" alt="dread realm" />
        </div>
        <div className="cardRight">
          <div className="banner"></div>
          <p className="bannertext">
            這是一個劍與魔法的世界，生活在這片名為“烏爾提”大陸的人們原本相安無事。
            可是有一天，一支不明來歷的軍團出現，他們伴隨著野獸，惡魔，哥布林等，以及隨後統領著這一切的領袖————魔神奧古斯的降臨！
          </p>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
        className="cardmirrored gameinfocard"
        duration={0.7}
        offset={300}
      >
        <div className="cardLeft">
          <div className="flames bannerleft"></div>
          <p className="bannertextleft">
            整片大陸迅速陷入了一片無序的混亂。戰爭和饑荒，以及常年的征戰，使人民遭受了巨大的苦難！而魔神奧古斯的攻擊和他的和暗黑染指仍然在繼續。探索這片被魔神踐踏和戰火摧毀過後的大陸！在廢墟中嘗試與潛伏在深淵的奧古斯殘黨————巨龍一族戰鬥。
          </p>
        </div>
        <div className="imagecontainer rightimage">
          <img
            src={wrathofthedragon}
            className="cardimage"
            alt="Wrath of the dragon"
          />
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
        className="gameinfocard"
        duration={0.7}
        offset={300}
      >
        <div className="imagecontainer">
          <img src={floatingland} className="cardimage" alt="Floating land" />
        </div>
        <div className="cardRight">
          <div className="float banner"></div>
          <p className="bannertext">
            正當黑暗仿佛看不見盡頭之際，守護住這片大陸的光明之神優米拉斯，賦予了七個在前線拼死抗爭到底的普通人類魔法和力量，七位勇士們所組成的“聯合前線”被稱為人類最後的希望！與魔神奧古斯所率領的軍隊在通古斯山脈下迎來了最終聖戰！
          </p>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
        className="cardmirrored gameinfocard"
        duration={0.7}
        offset={300}
      >
        <div className="cardLeft">
          <div className="magic bannerleft"></div>
          <p className="bannertextleft">
            作為被選中的召喚者們：也就是玩家！可以自由選擇扮演七種不同的職業，以“勇者”的視角，加入魔神對抗軍的行列，一同與光明之神優米拉斯徹底將魔神封印！
          </p>
        </div>
        <div className="imagecontainer rightimage">
          <img src={runemagic} className="cardimage" alt="Floating land" />
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Gameinfo;
