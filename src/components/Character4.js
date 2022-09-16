import ProgressBar from "react-bootstrap/ProgressBar";
import divider from "../images/divider.png";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "./News.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Character4 = () => {
  return (
    <div>
      <div className="charactertitle">
        <h2>元素魔女</h2>
        <p>CV配音：東山奈央</p>
      </div>
      <h3>莎缇娜</h3>
      <div className="charDescription">
        <p>
          莎緹娜是一位極具魔法天賦能力的少女，她的母親是人稱時之國的最高魔法天才皇帝：魔女梅杜莎！
        </p>
        <p>
          性格倔强，個性率直的她，很快就成為了一名聞名遐邇的魔女實習生，並且擅長使用各種燃燒魔法。
        </p>
        <p>
          不過因為大家閨秀的生活習慣，養成了不愛說話和貪錢的小毛病，所以跟隊友的相處好像也並不和睦？
        </p>
      </div>
    </div>
  );
};

const Character4Stat = () => {
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
          <p>25</p>
          <p>耐久 </p>
          <p>36</p>
          <p>敏捷 </p>
          <p>97</p>
          <p>心靈</p>
          <p>186</p>
          <p>知識 </p>
          <p>174</p>
          <p>神性</p>
          <p>36</p>
        </div>
        <div className="charTalent">
          <p className="text-left">武力值</p>
          <ProgressBar variant="warning" now={11} />
          <p className="text-left">魔力值</p>
          <ProgressBar variant="primary" now={89} />
          <p className="text-left">速度值</p>
          <ProgressBar variant="info" now={36} />
          <p className="text-left">幸運值</p>
          <ProgressBar variant="danger" now={29} />
        </div>
      </div>
    </div>
  );
};

const Character4Slider = () => {
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
      <Character4 />
      <Character4Stat />
    </Slider>
  );
};

export { Character4, Character4Stat, Character4Slider };
