import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dragonroar from "../images/news/dragonroar.webm";
import dragonroarimage from "../images/news/dragonroar.jpeg";
import newcompany from "../images/news/newcompany.webm";
import phoneix from "../images/news/Phoneix.webm";
import spider from "../images/news/spider.webm";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#50949b" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#50949b" }}
      onClick={onClick}
    />
  );
}

const News = () => {
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
    <div className="news">
      <h2>最新消息</h2>
      <Slider {...settings}>
        <div className="newsCard">
          <video poster={dragonroarimage} autoPlay muted loop>
            <source src={dragonroar} type="video/webm" />
          </video>
          <div>
            <p>版本1.0.3新增地下城</p>
            <p>尤格爾的煉獄</p>
          </div>
        </div>
        <div className="newsCard">
          <video autoPlay muted loop>
            <source src={newcompany} type="video/webm" />
          </video>
        </div>
        <div className="newsCard">
          <video className="phoneix" autoPlay muted loop>
            <source src={phoneix} type="video/webm" />
          </video>
        </div>
        <div className="newsCard">
          <video className="spider" autoPlay muted loop>
            <source src={spider} type="video/webm" />
          </video>
        </div>
      </Slider>
    </div>
  );
};

export default News;
