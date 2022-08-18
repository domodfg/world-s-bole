import "./styles/App.css";
import "./styles/navbarandlogo.css";
import "./styles/gameinfo.css";
import "./styles/news.css";
import "./styles/footer.css";
import Navbar from "./components/Navbar.js";
import Gameinfo from "./components/Gameinfo.js";
import News from "./components/News.js";
import Footer from "./components/footer.js";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Navbar />
        <div>
          <h1 className="logo">World's Bole</h1>
          <p>動作幻想 RPG</p>
        </div>
      </div>
      <Gameinfo />
      <News />
      <Footer />
    </div>
  );
}

export default App;
