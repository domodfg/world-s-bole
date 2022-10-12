import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import horse from "../images/ridesystem/horse.png"
import wolf from "../images/ridesystem/wolf.png"
import mocola from "../images/ridesystem/mocola.png"
import gwagwabird from "../images/ridesystem/gwagwabird.png"
import dragon from "../images/ridesystem/dragon.png"
import horse_thumbnail from "../images/ridesystem/horse_thumbnail.png"
import wolf_thumbnail from "../images/ridesystem/wolf_thumbnail.png"
import mocola_thumbnail from "../images/ridesystem/mocola_thumbnail.png"
import gwagwabird_thumbnail from "../images/ridesystem/gwagwabird_thumbnail.png"
import dragon_thumbnail from "../images/ridesystem/dragon_thumbnail.png"

const Ridesystem = () => {
    const rides = [horse_thumbnail, wolf_thumbnail, mocola_thumbnail, gwagwabird_thumbnail, dragon_thumbnail] 

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
                        <img src={horse}  alt="horse"/>
                    </div>
                    <div>
                        <img src={wolf} alt="wolf"/>
                    </div>
                    <div>
                        <img src={mocola} alt="mocola"/>
                    </div>
                    <div>
                        <img src={gwagwabird} alt="gwagwabird"/>
                    </div>
                    <div>
                        <img src={dragon} alt="dragon"/>
                    </div>
                </Slider>
            </div>
        </div>
    );
  };
  
  export default Ridesystem;