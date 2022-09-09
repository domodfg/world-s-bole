import "./styles/App.css";
import "./styles/navbarandlogo.css";
import "./styles/gameinfo.css";
import "./styles/news.css";
import "./styles/footer.css";
import "./styles/shop.css";
import "./styles/map.css";
import "./styles/footerpolicy.css";
import "./styles/gameplay.css";
import Navbar from "./components/Navbar.js";
import Gameinfo from "./components/Gameinfo.js";
import Gameplay from "./components/Gameplay.js";
import News from "./components/News.js";
import Footer from "./components/footer.js";
import Map from "./components/Map.js";
import mainvideo from "./images/main.webm";
import mainfallback from "./images/mainposter.jpg";
import { Subscribe } from "./components/Subscribe";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Navbar />
        <video poster={mainfallback} autoPlay muted loop>
          <source src={mainvideo} type="video/webm" />
        </video>
        <div>
          <h1 className="logo">World's Bole</h1>
          <p>動作幻想 RPG</p>
        </div>
      </div>
      <Gameinfo />
      <Gameplay />
      <Map />
      <News />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
