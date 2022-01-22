import React from "react";
import WeatherCard from "./UI/Card.js";
import Header from "./Header/Header.js";

function WeatherApp() {
  return (
    <div>
      <Header />
      <WeatherCard />
    </div>
  );
}

export default WeatherApp;
