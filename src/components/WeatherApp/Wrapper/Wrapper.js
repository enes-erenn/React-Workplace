import React from "react";
import WeatherCard from "../UI/Card.js";
import "./Wrapper.css"

function Wrapper() {
  return (
    <aside>
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
    </aside>
  );
}

export default Wrapper;
