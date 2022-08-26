import React from "react";

const Cityofendtitle = (props) => {
  if (props.title) {
    return <p>終之國</p>;
  }
};

const Cityofendinfo = (props) => {
  if (props.displayStatus) {
    return (
      <div>
        <p>終之國</p>
        <p>
          又稱：白色國度, 冰雪之國
          <br />
          以盡頭山脈為發源地，終結高原為主要領土，國民視末日火山為不祥象徵的國家。該國境內大部分領土終年被冰雪覆蓋，建國大約有1586個大陸曆年，人口98%以上是由人類族構成，只有極其一小部分是從南方流亡或遷移定居的精靈和獸人。
          <br />{" "}
          該國崇拜實用主義，更多地是因為地形文化的原因，城鎮和鄉村民風彪悍，平民尚武，認為”劍和武力就是一切！“，這種說法漸漸深入到國民的骨髓，幾乎人手配備一把長劍。至於個人更是崇尚武力”PK“，無論在城鎮抑或者在外面，單挑狀況時有發生......
        </p>
        <button onClick={props.onClickEvent}>返回</button>
      </div>
    );
  }
};

export { Cityofendinfo, Cityofendtitle };
