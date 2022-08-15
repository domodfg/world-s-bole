import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.js";
import Character from "./Character.js";
import Shop from "./Shop.js";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/character" element={<Character />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
