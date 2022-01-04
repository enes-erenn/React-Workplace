import React from "react";
import "./WeatherCard.css";
import WeatherAPI from "./WeatherAPI.js";

function WeatherCard() {
  return (
    <div className="container">
      <WeatherAPI />
    </div>
  );
}

export default WeatherCard;
