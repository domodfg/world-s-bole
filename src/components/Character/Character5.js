import ProgressBar from "react-bootstrap/ProgressBar";
import divider from "../../images/divider.png";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "../News.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Character5 = () => {
  return (
    <div>
      <div className="charactertitle">
        <h2>機械工程師</h2>
        <p>CV配音：花澤香菜</p>
      </div>
      <h3>艾曼紐·麗</h3>
      <div className="charDescription">
        <p>艾曼紐在學校裡的成績並不怎麼樣，因為她一開始就很討厭數學和工程。</p>
        <p>
          不知道怎麼地，工程學與她的命運卻緊密相連，這可能是因為父母的緣故，使她的美術生生涯就此終結。
        </p>
        <p>
          但可不要小看這位恬靜的文科生哦！即使在運用機械方面，她還是有十足的把握去用科學對付魔法！
        </p>
        <p>
          平時跟在她背後的這隻機器人......不對，應該是天線寶寶？看來並不是什麼好惹的角色。
        </p>
      </div>
    </div>
  );
};

const Character5Stat = () => {
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
          <p>65</p>
          <p>耐久 </p>
          <p>70</p>
          <p>敏捷 </p>
          <p>81</p>
          <p>心靈</p>
          <p>121</p>
          <p>知識 </p>
          <p>180</p>
          <p>神性</p>
          <p>123</p>
        </div>
        <div className="charTalent">
          <p className="text-left">武力值</p>
          <ProgressBar variant="warning" now={25} />
          <p className="text-left">魔力值</p>
          <ProgressBar variant="primary" now={69} />
          <p className="text-left">速度值</p>
          <ProgressBar variant="info" now={33} />
          <p className="text-left">幸運值</p>
          <ProgressBar variant="danger" now={78} />
        </div>
      </div>
    </div>
  );
};

const Character5Slider = () => {
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
      <Character5 />
      <Character5Stat />
    </Slider>
  );
};

export { Character5, Character5Stat, Character5Slider };
