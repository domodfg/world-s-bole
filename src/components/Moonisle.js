import React from "react";

const Moontitle = (props) => {
  if (props.title) {
    return <p>新月聯邦</p>;
  }
};

const Mooninfo = (props) => {
  if (props.displayStatus) {
    return (
      <div>
        <p>新月聯邦</p>
        <p>
          作為新生的一個屹立於半島上的國家，它的誕生和存在似乎是具有必然性。
          經過了長達千年的國境消耗戰後，一些精靈族戰士和魔法師開始對這場沒完沒了的戰事感到厭倦。也不知怎麼地，在中古時代結束的前夕（約2000年後），一群自發組織遠離戰爭類似“非暴力不合作“的隊伍，當中包含著人類魔法師和戰爭傷殘的精靈族戰士等，在高舉和平的主張下一路遊說到龐貝山脈下，當時精靈國因為對邊境的戰事以及對新生國家隆密隨時可能趁機來犯的防禦工事而無暇顧半島局勢，再加上獸人族一度陳兵於龐貝火山下，令到這支隊伍免去了後來被精靈族軍事法庭的審判和追究逃兵的罪責。
        </p>
        <button onClick={props.onClickEvent}>返回</button>
      </div>
    );
  }
};

export { Moontitle, Mooninfo };
