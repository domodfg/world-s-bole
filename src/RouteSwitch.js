import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.js";
import Character from "./Character.js";
import Shop from "./Shop.js";
import CheckOut from "./components/checkOut"

const RouteSwitch = () => {
  return (
    <BrowserRouter basename="/world-s-bole">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/character" element={<Character />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/check-out" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
