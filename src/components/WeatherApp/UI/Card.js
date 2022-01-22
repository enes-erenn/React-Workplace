import React from "react";
import "./Card.css";
import WeatherAPI from "../WeatherAPI.js";

function WeatherCard(props) {
  return (
    <div className="container">
      <WeatherAPI weatherCity={props.weatherCity} />
    </div>
  );
}

export default WeatherCard;
