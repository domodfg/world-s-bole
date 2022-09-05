import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import RouteSwitch from "./RouteSwitch";
import { Auth0Provider } from "@auth0/auth0-react";
import store from './utils/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-o3wgr4ti.us.auth0.com"
    clientId="UV7NFlGUCgThv83k8yuHyJisLe5Bm27D"
    redirectUri={window.location.origin + "/world-s-bole"}
  >
    <React.StrictMode>
    <Provider store={store}>
      <RouteSwitch />
    </Provider>
    </React.StrictMode>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
