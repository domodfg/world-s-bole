import React from "react";
import "./styles/App.css";
import "./styles/footerpolicy.css";
import Navbar from "./components/Navbar/Navbar.js";
import Gameinfo from "./components/Gameinfo.js";
import Gameplay from "./components/Gameplay.js";
import { News } from "./components/News.js";
import JoinUs from "./components/joinUs.js";
import Footer from "./components/footer.js";
import Map from "./components/Map.js";
import MainLogo from "./components/mainlogo.js";
import { Subscription } from "./components/Subscription";
import { AnimationOnScroll } from "react-animation-on-scroll";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainLogo />
      <Gameinfo />
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        duration={2}
        animateOnce={true}
      >
        <Gameplay />
      </AnimationOnScroll>
      <Map />
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        duration={2}
        animateOnce={true}
      >
        <News />
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        duration={2}
        animateOnce={true}
      >
        <JoinUs />
      </AnimationOnScroll>
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;
