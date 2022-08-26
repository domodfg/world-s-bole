import React from "react";

const Roamtitle = (props) => {
  if (props.title) {
    return <p>隆密</p>;
  }
};

const Roaminfo = (props) => {
  if (props.displayStatus) {
    return (
      <div>
        <p>隆密</p>
        <p>
          1522年，獸人族在人類的殖民管治下宣布建國，經過了約三十年的抗爭，人類方最終因為補給不足（基本上，哈契爾山脈的阻擋和熱帶氣候的不適應，使人類駐軍得不到充足的後勤保障）而宣布放棄並且承認隆密國。{" "}
          <br />{" "}
          長期的森林砍伐和建築工藝的提升，再加上有精靈國輸出的技術和知識，還有政治上的撐腰，獸人開始懂得運用長矛和獵犬，巨斧等武器，組織軍隊的能力和建築技術也都得到了巨大的進步。經過兩百年來的發展，隆密國國力達到頂峰，首都德希爾完全由木頭組建而成，因此又被成為“森林里的城堡”。
        </p>
        <button onClick={props.onClickEvent}>返回</button>
      </div>
    );
  }
};

export { Roaminfo, Roamtitle };
