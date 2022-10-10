import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import ride1 from "../images/ridesystem/horse.png"
import ride2 from "../images/ridesystem/wolf.png"
import ride1_thumbnail from "../images/ridesystem/horse_thumbnail.png"
import ride2_thumbnail from "../images/ridesystem/wolf_thumbnail.png"

const Ridesystem = () => {
    const rides = [ride1_thumbnail, ride2_thumbnail] 

    const settings = {
        customPaging: function(i) {
          return (
              <img src={rides[i]} alt="rides"/>
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
        <div className="ridesystem" id="ridesystem">
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
                        <img src={ride1}  alt="horse"/>
                    </div>
                    <div>
                        <img src={ride2} alt="wolf"/>
                    </div>
                </Slider>
            </div>
        </div>
    );
  };
  
  export default Ridesystem;