import React from "react";
import WeatherCard from "../UI/Card.js";
import "./Wrapper.css";

function Wrapper() {
  const cities = [
    "dubai",
    "hongkong",
    "london",
    "singapore",
    "paris",
    "istanbul",
    "new york city",
  ];
  return (
    <aside>
      <WeatherCard weatherCity={cities[0]} />
      <WeatherCard weatherCity={cities[1]} />
      <WeatherCard weatherCity={cities[2]} />
      <WeatherCard weatherCity={cities[3]} />
      <WeatherCard weatherCity={cities[4]} />
      <WeatherCard weatherCity={cities[5]} />
      <WeatherCard weatherCity={cities[6]} />
    </aside>
  );
}

export default Wrapper;
