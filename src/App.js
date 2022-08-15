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
        <AnimationOnScroll animateIn="animate__fadeIn" initiallyVisible={true}>
          <h1 className="logo">World's bole</h1>
        </AnimationOnScroll>
      </div>
      <div className="content">
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          initiallyVisible={true}
          className="dreadrealmCard"
        >
          <img src={dreadrealm} className="dreadrealm" alt="dread realm"/>
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
      </div>
    </div>
  );
}

export default App;
