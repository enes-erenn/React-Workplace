import React from "react";
import "./Card.css";
import WeatherAPI from "../WeatherAPI.js";

function WeatherCard() {
  return (
    <div className="container">
      <WeatherAPI />
    </div>
  );
}

export default WeatherCard;
