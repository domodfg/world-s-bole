import "./App.css";
import Navbar from "./components/Navbar.js";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import dreadrealm from "./images/dreadrealm.jpg";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Navbar />
        <AnimationOnScroll
          animateIn="animate__fadeInDown"
          initiallyVisible={true}
        >
          <h1 className="mainDescription logo">World's bole</h1>
          <p className="mainDescription des">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
            praesentium recusandae nostrum dignissimos vitae voluptas, sint quas
            soluta sapiente aliquid.
          </p>
        </AnimationOnScroll>
      </div>
      <div className="content">
        <div className="dreadrealmCard">
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <img src={dreadrealm} className="dreadrealm" />
          </AnimationOnScroll>
          <div className="cardRight">
            <div className="banner"></div>
            <p className="bannertext">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              soluta sequi cumque aut accusantium laboriosam dolores ipsam iste
              est quae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
