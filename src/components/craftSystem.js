import React from "react";
import mapresource from "../images/craftsystem/mapresources.jpg"
import bossfight from "../images/craftsystem/bossfight.jpg"
import crafttable from "../images/craftsystem/crafttable.jpg"
import { AnimationOnScroll } from "react-animation-on-scroll";

const Craftsystem = () => {
  return (
    <div className="craftsystem" id="craftsystem">
      <div className="systemshadow"></div>
      <AnimationOnScroll
        animateIn="animate__fadein"
        animateOnce="true"
        className="systemtitle"
        duration={1.5}
        offset={100}
      >
        <h1>合 成 系 統</h1>
      </AnimationOnScroll>        
      <div className="craftdetail">
        <div className="mapresource">
          <AnimationOnScroll
            animateIn="animate__fadeinleft"
            animateOnce="true"
            className="craftsystemimgbox"
            duration={1.5}
            offset={300}
          >
            <img src={mapresource} alt="mapresource"></img>
          </AnimationOnScroll>
          <div className="craftsystemdescription">
            <AnimationOnScroll
              animateIn="animate__fadeintop"
              animateOnce="true"
              className="craftsystemtitlebox"
              delay={300}
              duration={1.5}
              offset={300}
            >
              <p>地圖資源</p>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeinright"
              animateOnce="true"
              className="craftsystemtextbox"
              delay={600}
              duration={1.5}
              offset={158}
            >
              <p>在烏提爾的世界中，不同種族各據一方，發展出不同的文化，亦因此每個國家都有其獨特的資源。這些資源在裝備的合成中相當泛用。</p>
            </AnimationOnScroll>  
          </div> 
        </div>
        <div className="bossfight">
          <div className="craftsystemdescription">
            <AnimationOnScroll
              animateIn="animate__fadeintop"
              animateOnce="true"
              className="craftsystemtitlebox"
              delay={300}
              duration={1.5}
              offset={300}
            >
              <p>狩獵魔物</p>
            </AnimationOnScroll>
            <AnimationOnScroll
            animateIn="animate__fadeinleft"
            animateOnce="true"
            className="craftsystemtextbox"
            delay={600}
            duration={1.5}
            offset={160}
            >
              <p>於野外擊殺魔物，玩家可以獲得其身上的資源。而擊殺副本中的大型魔物，則有機會獲得其珍貴的資源，用作合成高級的裝備。</p>
            </AnimationOnScroll>
          </div> 
          <AnimationOnScroll
            animateIn="animate__fadeinright"
            animateOnce="true"
            className="craftsystemimgbox"
            duration={1.5}
            offset={300}
          >
            <img src={bossfight} alt="bossfight"></img>  
          </AnimationOnScroll> 
        </div>
        <div className="crafttable">
          <AnimationOnScroll
            animateIn="animate__fadeinleft"
            animateOnce="true"
            className="craftsystemimgbox"
            duration={1.5}
            offset={300}
          >
            <img src={crafttable} alt="crafttable"></img>
          </AnimationOnScroll>
          <div className="craftsystemdescription">
            <AnimationOnScroll
              animateIn="animate__fadeintop"
              animateOnce="true"
              className="craftsystemtitlebox"
              delay={300}
              duration={1.5}
              offset={300}
            >
              <p>合成列表</p>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeinright"
              animateOnce="true"
              className="craftsystemtextbox"
              delay={600}
              duration={1.5}
              offset={160}
            >
              <p>玩家在冒險中取得的資源，可以到城鎮打造裝備。每個城鎮都有其擅長製作的裝備，玩家可因應自身的喜好打造出適合自己的裝備。</p>
            </AnimationOnScroll>  
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Craftsystem;