import ProgressBar from "react-bootstrap/ProgressBar";
import divider from "../../images/divider.png";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "../News.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Character2 = () => {
  return (
    <div>
      <div className="charactertitle">
        <h2>心靈弓兵</h2>
        <p>CV配音：澤城美雪</p>
      </div>
      <h3>奧蘭多·奇亞娜</h3>
      <div className="charDescription">
        <p>
          奇亞娜是一位出色的弓箭手，她曾經在大戰中打退過魔君騎兵的一個排，而且很擅長游擊和地道戰。
        </p>
        <p>
          平時最大的樂趣是在出戰的前夕唱歌，以歌聲激勵身邊的戰友，向世界樹祈禱為他們贏得取得勝利的加護。
        </p>
        <p>
          即便是上年紀了，但她的身體依然輕盈如燕，在奔跑和作戰的過程中都能夠做到疾如風，徐如林！
        </p>
        <p>
          長期生活在森林里的她，已經懂得運用氣候和叢林做好埋伏敵人的準備，務求精準地射擊並且百發百中！
        </p>
      </div>
    </div>
  );
};

const Character2Stat = () => {
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
          <p>102</p>
          <p>耐久 </p>
          <p>69</p>
          <p>敏捷 </p>
          <p>161</p>
          <p>心靈</p>
          <p>138</p>
          <p>知識 </p>
          <p>109</p>
          <p>神性</p>
          <p>87</p>
        </div>
        <div className="charTalent">
          <p className="text-left">武力值</p>
          <ProgressBar variant="warning" now={64} />
          <p className="text-left">魔力值</p>
          <ProgressBar variant="primary" now={72} />
          <p className="text-left">速度值</p>
          <ProgressBar variant="info" now={60} />
          <p className="text-left">幸運值</p>
          <ProgressBar variant="danger" now={45} />
        </div>
      </div>
    </div>
  );
};

const Character2Slider = () => {
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
      <Character2 />
      <Character2Stat />
    </Slider>
  );
};

export { Character2, Character2Stat, Character2Slider };
