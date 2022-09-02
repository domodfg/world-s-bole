import runemagic from "../images/gameinfo/runemagic.jpg";
import gameinfo1 from "../images/gameinfo/gameinfo1.jpg";
import gameinfo3 from "../images/gameinfo/gameinfo3.webm";
import gameinfo3jpg from "../images/gameinfo/gameinfo3.jpg";
import gameinfo2 from "../images/gameinfo/gameinfo2.webm";
import gameinfo2jpg from "../images/gameinfo/gameinfo2.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import React, { useState, useRef, useEffect } from "react";

const Gameinfo = () => {
  const [displayInfo, setDisplayInfo] = useState(false);
  const popupRef = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        displayInfo &&
        popupRef.current &&
        !popupRef.current.contains(e.target)
      ) {
        setDisplayInfo(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [displayInfo]);

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
          <img src={gameinfo1} className="cardimage" alt="Dread realm" />
        </div>
        <div className="cardRight">
          <div className="banner"></div>
          <p className="bannertext">
            這是一個劍與魔法的世界，生活在這片名為“烏爾提”大陸的人們原本相安無事。
            可是有一天，一支不明來歷的軍團出現，他們伴隨著野獸，惡魔，哥布林等，以及隨後統領著這一切的領袖————魔神奧古斯的降臨！
          </p>
          <button onClick={() => setDisplayInfo(true)}>Click</button>
        </div>
      </AnimationOnScroll>
      {displayInfo && (
        <div className="gameinfopopup" ref={popupRef}>
          <p>
            中古時代（約861-2022年）： <br />
            大陸歷2022年3月，魔神奧比斯指揮大約兩萬餘惡魔士兵，藉助利用大約一千餘名招攬而來的魔法師和祭司之下，由通古斯山脈出發，直接經海上漩渦使用了海底傳送門（據說許多招攬而來的魔法師都是自動投誠，也有人類奸細和叛軍）登陸到大陸平原上。此時附近海岸的邊境守軍大多數係出身魔法師的逢魔一族，因時之國與塞拉菲爾長期處於敵對關係，自時之國立國（約1068年）伊始，兩國便圍繞“亞齊爾人正統”的名號展開了長達九百多年的國境消耗戰，史稱為“大陸千年戰爭”。
            兩國互不相通，再加上戰前準備的嚴重不足和損耗過多，令魔神的軍隊如同進入無人之境。自3月初發動進攻後，騎兵部隊迅速攻佔了平原上的幾個重要城鎮，兩國也都因為陷入長期的消耗戰而導致軍心渙散，信息嚴重落後。4月，時之國投入大量的魔法師和民兵戰死，逢魔族宣布投降。6月，精靈國陷入唇亡齒寒的境地，魔軍步兵開始兵分兩路，從月牙湖和國界山兩側越過，在騎兵部隊的帶領下一路迅速長驅直進到精靈國首都艾爾斯蘭。另一路則向亞齊爾森林退守和躲避的精靈守軍和妖精發動進攻。因魔神一直認為大陸中心的生命樹乃對它的不祥之物，因而下達了總動員格殺令，務必擊潰所有守在森林內的精靈抵抗軍。
            <br />
            隨後，首都陷落的消息很快就傳遍到世界的中心。6月18日，反抗軍首領艾札爾（艾爾斯蘭王的兒子）被迫率領部隊退出森林，往生命樹根下躲避並謀求進一步的反擊，由於許多聽聞到首都淪陷和平民也跟隨住大部對向生命樹下逃逸。到了19日，魔軍的先鋒哥布林部隊和騎兵抵達生命樹下，向拼死守護在樹下不肯後退的妖精和精靈反抗軍進行了慘絕人寰的大規模屠殺（後世認為這次事件直接導致了生命樹的停止生長，而精靈一族的飛翔能力也因此嚴重被削弱，絕大多數負隅頑抗會飛的妖精近乎慘遭滅絕）。
          </p>
          <button onClick={() => setDisplayInfo(false)}>返回</button>
        </div>
      )}
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
          <video
            poster={gameinfo2jpg}
            className="cardimage"
            autoPlay
            muted
            loop
          >
            <source src={gameinfo2} type="video/webm" />
          </video>
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
          <video
            poster={gameinfo3jpg}
            className="cardimage"
            autoPlay
            muted
            loop
          >
            <source src={gameinfo3} type="video/webm" />
          </video>
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
