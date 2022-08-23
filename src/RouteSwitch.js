import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App.js";
import Character from "./Character.js";
import Shop from "./Shop.js";
import CheckOut from "./components/checkOut";
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
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;
