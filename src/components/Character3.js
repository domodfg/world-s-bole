import ProgressBar from "react-bootstrap/ProgressBar";
import divider from "../images/divider.png";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "./News.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Character3 = () => {
  return (
    <div>
      <div className="charactertitle">
        <h2>狂野獵犬</h2>
        <p>CV配音：小林沙苗</p>
      </div>
      <h3>圖夫</h3>
      <div className="charDescription">
        <p>外表看起來兇猛冷酷，但內心其實是非常小孩子氣的大叔？</p>
        <p>
          因為生活的地方長期在森林裏頭，所以對外部世界很感興趣，好奇心旺盛的他，會被隊友當作是吉祥物。
        </p>
        <p>
          擅長用利爪和尖牙粉碎敵人的咽喉！不過，對自己的隊友卻是出奇地溫和，因此是隻能幹的...忠犬？？
        </p>
      </div>
    </div>
  );
};

const Character3Stat = () => {
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
          <p>197</p>
          <p>耐久 </p>
          <p>158</p>
          <p>敏捷 </p>
          <p>126</p>
          <p>心靈</p>
          <p>60</p>
          <p>知識 </p>
          <p>15</p>
          <p>神性</p>
          <p>?</p>
        </div>
        <div className="charTalent">
          <p className="text-left">武力值</p>
          <ProgressBar variant="warning" now={90} />
          <p className="text-left">魔力值</p>
          <ProgressBar variant="primary" now={8} />
          <p className="text-left">速度值</p>
          <ProgressBar variant="info" now={56} />
          <p className="text-left">幸運值</p>
          <ProgressBar variant="danger" now={30} />
        </div>
      </div>
    </div>
  );
};

const Character3Slider = () => {
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
      <Character3 />
      <Character3Stat />
    </Slider>
  );
};

export { Character3, Character3Stat, Character3Slider };
