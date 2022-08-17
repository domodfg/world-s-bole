import dreadrealm from "../images/dreadrealm.jpg";
import wrathofthedragon from "../images/wrathofthedragon.jpeg";
import floatingland from "../images/floatingland.jpg";
import runemagic from "../images/runemagic.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const Gameinfo = () => {
  return (
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
  );
};

export default Gameinfo;
