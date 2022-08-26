import React from "react";

const Timetitle = (props) => {
  if (props.title) {
    return <p>時之國</p>;
  }
};

const Timeinfo = (props) => {
  if (props.displayStatus) {
    return (
      <div>
        <p>時之國</p>
        <p>
          相傳誕生在大陸西南逢魔海岸上的逢魔村，原本是一條經營著漁業和海上商貿的村落。通過海上經商而慢慢累積財富變得越來越富有的商人和村民，開始對外部世界有了擴張的慾望。
          <br />
          直到遠古時代的某天，一隊路過詛咒森林和魔君洞的逢魔商隊，不知道是意外亦或者是天賜良機，竟在這兩個地方同時得到了兩本經文：一本叫《時辰傳》和《魔君經文》的禁忌書籍！商隊很快便帶回去家鄉作深入研究，繼而打開了逢魔人點擊起使用魔法力量的科技樹大門。
          但萬萬沒想到的是，這兩本書應該劃分成為上下冊：《時辰傳》所記載的魔法知識和技能只是為了方便打開下一冊中召喚魔神奧比斯降臨的通道...
        </p>
        <button onClick={props.onClickEvent}>返回</button>
      </div>
    );
  }
};

export { Timetitle, Timeinfo };
