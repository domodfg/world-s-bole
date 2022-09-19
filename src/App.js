import React from "react";
import "./styles/App.css";
import "./styles/footerpolicy.css";
import Navbar from "./components/Navbar.js";
import Gameinfo from "./components/Gameinfo.js";
import Gameplay from "./components/Gameplay.js";
import { News } from "./components/News.js";
import Footer from "./components/footer.js";
import Map from "./components/Map.js";
import mainvideo from "./images/main.webm";
import mainfallback from "./images/mainposter.jpg";
import { Subscription } from "./components/Subscription";
import { AnimationOnScroll } from "react-animation-on-scroll";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <video poster={mainfallback} autoPlay muted loop>
          <source src={mainvideo} type="video/webm" />
        </video>
        <div>
          <h1 className="logo">World's Bole</h1>
          <p className="logoBottom">動作幻想 RPG</p>
        </div>
      </div>
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
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;
