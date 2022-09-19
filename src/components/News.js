import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import divider from "../images/divider.png";
import dragonroar from "../images/news/dragonroar.jpg";
import newcompany from "../images/news/newcompany.webm";
import phoneix from "../images/news/Phoneix.webm";
import spider from "../images/news/spider.webm";
import gameNews from "../images/news/news.jpeg";
import "../styles/news.css";

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
      <div className="divider">
        <img src={divider} className="dividermirror" alt="divider" />
        <h2>最新消息</h2>
        <img src={divider} alt="divider" />
      </div>
      <Slider {...settings}>
        <div className="newsCard">
          <img src={gameNews} alt="link to world's bole 2's page" />
        </div>
        <div className="newsCard">
          <img src={dragonroar} alt="new dungeon release" />
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

export { News, SampleNextArrow, SamplePrevArrow };
