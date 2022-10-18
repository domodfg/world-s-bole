import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/gacha.css";
import gacha1 from "../../images/shop/gacha1.png";
import gacha2 from "../../images/shop/gacha2.jpg";
import gacha3 from "../../images/shop/gacha3.jpg";
import { gameItem } from "./gameProduct.js";
import GachaItem from "./GachaItem.js";
import GachaInfo1 from "./Gacha1.js";
import GachaInfo2 from "./Gacha2.js";
import GachaInfo3 from "./Gacha3.js";

const ShopGacha = () => {
  const [displayLoot, setDisplayLoot] = useState();
  const [lootList, setLoot] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);

  const draw = (times, gachaNumber) => {
    const URweapon = gameItem.filter((item) => item.rarity === 6);
    const SRweapon = gameItem.filter(
      (item) => item.rarity >= 4 && item.rarity <= 5
    );
    const Rweapon = gameItem.filter(
      (item) => item.rarity >= 2 && item.rarity <= 3
    );
    const lootArray = [];
    const drawNTimes = (times, gachaNumber) => {
      for (let i = 0; i < times; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        switch (true) {
          case randomNumber >= 1 && randomNumber <= 84:
            const R = Rweapon[Math.floor(Math.random() * Rweapon.length)];
            lootArray.push(R);
            break;
          case randomNumber >= 85 && randomNumber <= 94:
            const SR = SRweapon[Math.floor(Math.random() * SRweapon.length)];
            lootArray.push(SR);
            break;
          case randomNumber >= 95 && randomNumber <= 99:
            const UR = URweapon[Math.floor(Math.random() * URweapon.length)];
            lootArray.push(UR);
            break;
          case randomNumber === 100:
            if (gachaNumber === 1) {
              lootArray.push("prize");
            } else if (gachaNumber === 2) {
              lootArray.push("prize2");
            } else if (gachaNumber === 3) {
              lootArray.push("prize3");
            }
            break;
          default:
            return;
        }
      }
      setLoot(<GachaItem items={lootArray} />);
    };
    drawNTimes(times, gachaNumber);
  };

  useEffect(() => {
    if (currentSlide === 0) {
      setDisplayLoot(<GachaInfo1 lootList={lootList} draw={draw} />);
    } else if (currentSlide === 1) {
      setDisplayLoot(<GachaInfo2 lootList={lootList} draw={draw} />);
    } else if (currentSlide === 2) {
      setDisplayLoot(<GachaInfo3 lootList={lootList} draw={draw} />);
    } else return;
  }, [currentSlide, lootList]);

  useEffect(() => {
    setLoot();
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
        variant="dark"
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
