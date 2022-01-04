import React from "react";
import WeatherChart from "./WeatherChart.js";
import WeatherAPI from "./WeatherDegree.js"

function WeatherApp() {
  return (
    <div>
      <WeatherChart />
      <WeatherAPI />
    </div>
  );
}

export default WeatherApp;
