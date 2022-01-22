import React from "react";
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Wrapper from "./Wrapper/Wrapper.js";
import "./WeatherApp.css";

function WeatherApp() {
  return (
    <div>
      <Header />
      <Main />
      <Wrapper />
    </div>
  );
}

export default WeatherApp;
