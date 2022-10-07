import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import ride1 from "../images/horse.png"
import ride2 from "../images/wolf.png"
import ride1_thumbnail from "../images/horse_thumbnail.png"
import ride2_thumbnail from "../images/wolf_thumbnail.png"

const Ridesystem = () => {
    const rides = [ride1_thumbnail, ride2_thumbnail] 

    const settings = {
        customPaging: function(i) {
          return (
            <a>
              <img src={rides[i]} />
            </a>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div className="ridesystem">
            <AnimationOnScroll
            animateIn="animate__fadein"
            animateOnce="true"
            className="systemtitle"
            duration={1.5}
            offset={100}
            >
                <h1>坐 騎 系 統</h1>
            </AnimationOnScroll>
            <div className="ridedetail">
                <Slider {...settings}>
                    <div>
                        <img src={ride1} />
                    </div>
                    <div>
                        <img src={ride2} />
                    </div>
                </Slider>
            </div>
        </div>
    );
  };
  
  export default Ridesystem;