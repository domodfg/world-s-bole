import gameinfo1 from "../images/gameinfo/gameinfo1.jpg";
import gameinfo3 from "../images/gameinfo/gameinfo3.jpg";
import gameinfo2 from "../images/gameinfo/gameinfo2.jpg";
import gameinfo4 from "../images/gameinfo/gameinfo4.webm";
import gameinfo4fallback from "../images/gameinfo/gameinfo4.jpg";
import moreinfo from "../images/gameinfo/Fantasy_Spell_Book.png";
import close from "../images/gameinfo/close.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import React, { useState, useRef, useEffect } from "react";
import "../styles/gameinfo.css";

const Gameinfo = () => {
  const [displayInfo, setDisplayInfo] = useState(false);
  const [displayInfo2, setDisplayInfo2] = useState(false);
  const [displayInfo3, setDisplayInfo3] = useState(false);
  const popupRef = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        (displayInfo || displayInfo2 || displayInfo3) &&
        popupRef.current &&
        !popupRef.current.contains(e.target)
      ) {
        setDisplayInfo(false);
        setDisplayInfo2(false);
        setDisplayInfo3(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [displayInfo, displayInfo2, displayInfo3]);

  return (
    <div className="content">
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        className="gameinfocard"
        duration={2}
        animateOnce={true}
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
          <img
            className="infobook1"
            src={moreinfo}
            onClick={() => setDisplayInfo(true)}
            alt="more info"
          />
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        className="cardmirrored gameinfocard"
        duration={2}
        animateOnce={true}
      >
        <div className="cardLeft">
          <div className="flames bannerleft"></div>
          <p className="bannertextleft">
            整片大陸迅速陷入了一片無序的混亂。戰爭和饑荒，以及常年的征戰，使人民遭受了巨大的苦難！而魔神奧古斯的攻擊和他的和暗黑染指仍然在繼續。探索這片被魔神踐踏和戰火摧毀過後的大陸！在廢墟中嘗試與潛伏在深淵的奧古斯殘黨————巨龍一族戰鬥。
          </p>
          <img
            className="infobook2"
            src={moreinfo}
            onClick={() => setDisplayInfo2(true)}
            alt="more info"
          />
        </div>
        <div className="imagecontainer rightimage">
          <img src={gameinfo2} className="cardimage" alt="Floating land" />
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        className="gameinfocard"
        duration={2}
        animateOnce={true}
      >
        <div className="imagecontainer">
          <img src={gameinfo3} className="cardimage" alt="Floating land" />
        </div>
        <div className="cardRight">
          <div className="float banner"></div>
          <p className="bannertext">
            正當黑暗仿佛看不見盡頭之際，守護住這片大陸的光明之神優米拉斯，賦予了七個在前線拼死抗爭到底的普通人類魔法和力量，七位勇士們所組成的“聯合前線”被稱為人類最後的希望！與魔神奧古斯所率領的軍隊在通古斯山脈下迎來了最終聖戰！
          </p>
          <img
            className="infobook3"
            src={moreinfo}
            onClick={() => setDisplayInfo3(true)}
            alt="more info"
          />
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        className="cardmirrored gameinfocard"
        duration={2}
        animateOnce={true}
      >
        <div className="cardLeft">
          <div className="magic bannerleft"></div>
          <p className="bannertextleft">
            作為被選中的召喚者們：也就是玩家！可以自由選擇扮演七種不同的職業，以“勇者”的視角，加入魔神對抗軍的行列，一同與光明之神優米拉斯徹底將魔神封印！
          </p>
        </div>
        <div className="imagecontainer rightimage">
          <video
            poster={gameinfo4fallback}
            className="cardimage"
            autoPlay
            muted
            loop
          >
            <source src={gameinfo4} type="video/webm" />
          </video>
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
          <img
            className="close"
            src={close}
            alt="close"
            onClick={() => setDisplayInfo(false)}
          />
        </div>
      )}
      {displayInfo2 && (
        <div className="gameinfopopup" ref={popupRef}>
          <p>
            隨後，首都陷落的消息很快就傳遍到世界的中心。
            <br />
            6月18日，反抗軍首領艾札爾（艾爾斯蘭王的兒子）被迫率領部隊退出森林，往生命樹根下躲避並謀求進一步的反擊，由於許多聽聞到首都淪陷和平民也跟隨住大部對向生命樹下逃逸。到了19日，魔軍的先鋒哥布林部隊和騎兵抵達生命樹下，向拼死守護在樹下不肯後退的妖精和精靈反抗軍進行了慘絕人寰的大規模屠殺（後世認為這次事件直接導致了生命樹的停止生長，而精靈一族的飛翔能力也因此嚴重被削弱，絕大多數負隅頑抗會飛的妖精近乎慘遭滅絕）。
            <br />
            悲劇發生後，精靈族陷入了長期的游擊戰。直到8月，魔軍佔領了平原上的大部分土地，開始計劃向北方的人類和隆密進兵，兩國對於自身可能被滅族和重蹈精靈慘劇的危機感增加。直到9月1日，人類和獸人族好不容易才達成了共識，建立了當時一度聲名大噪的“獸人聯盟”。9月3日，第一支由隆密派出的三千餘名獵人向哥布林部隊發動了進攻。4日，北方的人類也揮軍兩萬南下，幫助留亡到終之國的艾扎爾王室復國。
            正當所有人都認為曙光嶄露之際，奧比斯卻作出了令人震驚和果斷的形勢判斷。它意識到人類始終是大陸上最棘手的環節。9月6日，隆密國的第一支衝鋒部隊雖然取得了初步勝利，但到了次日，魔軍卻突然向北方高原上的人類守軍發動了而來的魔法師與精靈奴隸等，向人類投放了大量的燃燒魔法和重砲彈藥（此科技乃精靈國首奇襲，利用祭司和俘虜創），成功穿過了自然屏障界限森林，並迅速攻佔了當時的人類邊境重鎮克萊文。10日，首都風暴城內人心惶惶。9月12日，精靈王族再次展開逃亡，一直逃到了人類在海上的邊境重鎮要塞都市。15日，人類在冰原上展開了與魔軍聲勢浩大的殊死抵抗，投入到此次戰事中的人類總數高達十五萬左右，超過70%以上的人口被捲入到這場戰役裡，史稱”冰原抗擊戰”。
          </p>
          <img
            className="close"
            src={close}
            alt="close"
            onClick={() => setDisplayInfo2(false)}
          />
        </div>
      )}
      {displayInfo3 && (
        <div className="gameinfopopup" ref={popupRef}>
          <p>
            近現代：
            <br />
            伴隨著魔神的持續侵犯，烏提爾大陸也進入了近代時期。10月21日，隨著風暴城首都保衛戰結束，人類一方最終取得了勝利，卻死傷慘重，半數人口死亡和城鎮農田變成廢墟。
            <br />
            惱羞成怒的奧比斯轉而向鹽湖城發動進迫，戰火開始蔓延到了全國。在一片絕望和哀嚎聲中，光明神優比特彷彿聽見了人們的禱告。10月30日，正值鹽湖城戰役進行到如火如荼之際，大陸上各處出現了不同程度的地震，只見一道化作酷似人形的光芒在生命樹頂上出現，人們稱之為“烏提爾的奇跡”！當晚，大陸上各處出現了被眷顧召喚而出的勇者，他們都是優比特親自下凡選出來的使者！不僅指引人們走出了的戰事即將失敗的陰霾，所到之處都得到了治癒和救贖。後世人們稱之為“被選中的人”。
            <br />
            優比特的出現無疑是對魔神的最大羞辱！大陸歷2022年11月，在鹽湖城的攻略戰再次落敗後，魔神本人決定親自現身。15日，它的真身出現在通古斯山頂上，向大陸上的哥布林和惡魔部隊下達了最後命令。此時人類，精靈和獸人族以及時之國的逢魔族已經連成並合併成“聯盟陣線”，四國在得到了後勤國新月聯邦的保障下簽訂了聯合誓約，五個國家在平原上集結總兵力約十萬，展開了對平原國家的收復行動。12月20日，時之國和塞爾菲爾復國。12月25日，聯軍登陸軍艦島，借助新月工程師和魔法師的力量打通了島上的傳送門，將兵力直接投放到了魔神的老巢。
            <br />
            得知此消息的魔神奧比斯一怒之下集結了總兵力約六萬，開始與聯合軍在通古斯山脈下的黑暗平原上展開了“最後聖戰”！結果以奧比斯的戰敗和身死落幕：它選擇以自殺和詛咒的方式暫別烏提爾這個舞台，從通古斯山頂的懸崖上跳了下去......
          </p>
          <img
            className="close"
            src={close}
            alt="close"
            onClick={() => setDisplayInfo3(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Gameinfo;
