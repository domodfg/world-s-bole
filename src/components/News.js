import Slider from "react-slick";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import divider from "../images/divider.png";
import gameNews from "../images/news/news.jpeg";
import gameNews2 from "../images/news/news2.jpeg";
import gameNews3 from "../images/news/news3.jpeg";
import gameNews4 from "../images/news/news4.png";
import gameNews5 from "../images/news/news5.png";
import gameNews6 from "../images/news/news6.png";
import gameNews7 from "../images/news/news7.png";
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

class News extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: true,
      cssEase: "ease-in-out",
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "20px",
          },
        },
      ],
    };
    return (
      <div className="news">
        <div className="divider">
          <img src={divider} className="dividermirror" alt="divider" />
          <h2>最新消息</h2>
          <img src={divider} alt="divider" />
        </div>
        <div className="sliderContainer">
          <Slider {...settings}>
            <div className="newsCard">
              <img src={gameNews} alt="link to world's bole 2's page" />
            </div>
            <div className="newsCard">
              <img src={gameNews2} alt="world's bole news" />
            </div>
            <div className="newsCard">
              <img src={gameNews4} alt="new dungeon release" />
            </div>
            <div className="newsCard">
              <img src={gameNews3} alt="world's bole news" />
            </div>
            <div className="newsCard">
              <img src={gameNews6} alt="new dungeon release" />
            </div>
            <div className="newsCard">
              <img src={gameNews5} alt="new dungeon release" />
            </div>
            <div className="newsCard">
              <img src={gameNews7} alt="new dungeon release" />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export { News, SampleNextArrow, SamplePrevArrow };
