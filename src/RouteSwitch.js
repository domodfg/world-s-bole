import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App.js";
import Character from "./Character.js";
import Shop from "./Shop.js";
import CheckOut from "./components/checkOut";
import Story from "./Story.js";
import Usepolicy from "./components/Usepolicy.js";
import Privacy from "./components/Privacy.js";
import Cookiepolicy from "./components/Cookiepolicy.js";
import Contactus from "./components/Contactus.js";
import ScrollToTop from "./components/Scrolltotop.js";

const RouteSwitch = () => {
  return (
    <HashRouter hashType="hashbang">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/character" element={<Character />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/check-out" element={<CheckOut />} />
        <Route path="/story" element={<Story />} />
        <Route path="/usepolicy" element={<Usepolicy />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookiepolicy" element={<Cookiepolicy />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;
