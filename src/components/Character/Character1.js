import ProgressBar from "react-bootstrap/ProgressBar";
import divider from "../../images/divider.png";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "../News.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Character1 = () => {
  return (
    <div>
      <div className="charactertitle">
        <h2>拂曉劍士</h2>
        <p>CV配音：福山潤</p>
      </div>
      <h3>卡拉奇·扎比</h3>
      <div className="charDescription">
        <p>卡拉奇出生在人類終之國內鹽湖城的一個清晨，因此被稱為“破曉”。</p>
        <p>
          從小的志願是為了當上一個有名氣的劍士，為人熱心正直，遇見不公平的事情會拔劍相助。
        </p>
        <p>
          雖然家境一般而且很窮，但他沒有氣餒，為了達成目標，甘願一邊苦修劍術一邊打工和冒險？
        </p>
        <p>
          擁有堅韌不拔的意志，不怕被人嘲笑年輕，少年意氣風發，似乎會是個團隊裡的好幫手！
        </p>
      </div>
    </div>
  );
};

const Character1Stat = () => {
  return (
    <div>
      <div className="divider">
        <img src={divider} className="dividermirror" alt="divider" />
        <h2 className="charAbility">初始天賦/綜合平均值</h2>
        <img src={divider} alt="divider" />
      </div>
      <div className="charStats">
        <div className="statsGrid">
          <p>力量</p>
          <p>185</p>
          <p>耐久 </p>
          <p>98</p>
          <p>敏捷 </p>
          <p>78</p>
          <p>心靈</p>
          <p>30</p>
          <p>知識 </p>
          <p>98</p>
          <p>神性 </p>
          <p>106</p>
        </div>
        <div className="charTalent">
          <p className="text-left">武力值</p>
          <ProgressBar variant="warning" now={81} />
          <p className="text-left">魔力值</p>
          <ProgressBar variant="primary" now={12} />
          <p className="text-left">速度值</p>
          <ProgressBar variant="info" now={36} />
          <p className="text-left">幸運值</p>
          <ProgressBar variant="danger" now={42} />
        </div>
      </div>
    </div>
  );
};

const Character1Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings} className="characterinfomobile">
      <Character1 />
      <Character1Stat />
    </Slider>
  );
};

export { Character1, Character1Stat, Character1Slider };
