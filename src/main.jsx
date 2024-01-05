import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import IconsSVGs from "./Components/IconSVGs.jsx";
import WeatherSVGs from "./Components/WeatherSVGs.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <IconsSVGs />
    <WeatherSVGs />
  </React.StrictMode>
);
