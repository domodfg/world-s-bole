import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/gacha.css";
import gacha1 from "../../images/shop/gacha1.png";
import gacha2 from "../../images/shop/gacha2.jpg";
import gacha3 from "../../images/shop/gacha3.jpg";
import gacha4 from "../../images/shop/gacha4.jpg";
import GachaDetail from "./GachaDetails.js";

const ShopGacha = () => {
  const [displayLoot, setDisplayLoot] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (currentSlide === 0) {
      setDisplayLoot(<GachaDetail gachaType={1} />);
    } else if (currentSlide === 1) {
      setDisplayLoot("bruh2");
    } else if (currentSlide === 2) {
      setDisplayLoot(<GachaDetail gachaType={3} />);
    } else return;
  }, [currentSlide]);

  const detectCurrentSlide = (eventKey) => {
    setCurrentSlide(eventKey);
  };

  return (
    <div>
      <Carousel
        className="gachaSlide"
        onSelect={(eventKey) => detectCurrentSlide(eventKey)}
        interval={null}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={gacha1}
            alt="First slide"
            datatype="1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={gacha2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={gacha3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      {displayLoot}
    </div>
  );
};

export default ShopGacha;
