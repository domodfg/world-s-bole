import "./App.css";
import Navbar from "./components/Navbar.js";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dreadrealm from "./images/dreadrealm.jpg";
import wrathofthedragon from "./images/wrathofthedragon.jpeg";
import floatingland from "./images/floatingland.jpg";
import runemagic from "./images/runemagic.jpg";

function App() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="App">
      <div className="main">
        <Navbar />
        <div>
          <h1 className="logo">World's Bole</h1>
          <p>Action fantasy RPG</p>
        </div>
      </div>
      <div className="content">
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          className="card"
          duration={0.7}
          offset={300}
        >
          <img src={dreadrealm} className="cardimage" alt="dread realm" />
          <div className="cardRight">
            <div className="banner"></div>
            <p className="bannertext">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              soluta sequi cumque aut accusantium laboriosam dolores ipsam iste
              est quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nihil soluta sequi cumque aut accusantium laboriosam dolores ipsam
              iste est quae. 
            </p>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          className="cardmirrored card"
          duration={0.7}
          offset={300}
        >
          <div className="cardLeft">
            <div className="flames bannerleft"></div>
            <p className="bannertextleft">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              soluta sequi cumque aut accusantium laboriosam dolores ipsam iste
              est quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nihil soluta sequi cumque aut accusantium laboriosam dolores ipsam
              iste est quae.
            </p>
          </div>
          <img
            src={wrathofthedragon}
            className="cardimage"
            alt="Wrath of the dragon"
          />
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          className="card"
          duration={0.7}
          offset={300}
        >
          <img src={floatingland} className="cardimage" alt="Floating land" />
          <div className="cardRight">
            <div className="float banner"></div>
            <p className="bannertext">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              soluta sequi cumque aut accusantium laboriosam dolores ipsam iste
              est quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nihil soluta sequi cumque aut accusantium laboriosam dolores ipsam
              iste est quae.
            </p>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          className="cardmirrored card"
          duration={0.7}
          offset={300}
        >
          <div className="cardLeft">
            <div className="magic bannerleft"></div>
            <p className="bannertextleft">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              soluta sequi cumque aut accusantium laboriosam dolores ipsam iste
              est quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nihil soluta sequi cumque aut accusantium laboriosam dolores ipsam
              iste est quae.
            </p>
          </div>
          <img src={runemagic} className="cardimage" alt="Floating land" />
        </AnimationOnScroll>
      </div>
      <div className="news">
        <Slider {...settings}>
          <div className="newsCard">
            <p className="newshead">Patch 1.0.3</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              soluta sequi cumque aut accusantium laboriosam dolores ipsam iste
              est quae.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              soluta sequi cumque aut accusantium laboriosam dolores ipsam iste
              est quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
             
            </p>
          </div>
          <div className="newsCard">
            <p className="newshead">Patch 1.0.2</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              soluta sequi cumque aut accusantium laboriosam dolores ipsam iste
              est quae.
            </p>
          </div>
          <div className="newsCard">
            <p className="newshead">Patch 1.0.1</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              soluta sequi cumque aut accusantium laboriosam dolores ipsam iste
              est quae.
            </p>
          </div>
          <div className="newsCard">
            <p className="newshead">Launch day!</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              soluta sequi cumque aut accusantium laboriosam dolores ipsam iste
              est quae.
            </p>
          </div>
          <div className="newsCard">
            <p className="newshead">OST on sale!</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              soluta sequi cumque aut accusantium laboriosam dolores ipsam iste
              est quae.
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default App;
