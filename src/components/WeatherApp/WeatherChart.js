import React from "react";
import "./WeatherChart.css";
import WeatherAPI from "./WeatherAPI.js";

function WeatherChart() {
  return (
    <div className="container">
      <WeatherAPI />
    </div>
  );
}

export default WeatherChart;
