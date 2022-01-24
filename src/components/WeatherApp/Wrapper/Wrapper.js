import React from "react";
import WeatherCard from "../UI/Card.js";
import styles from "./Wrapper.module.css";

function Wrapper() {
  const cities = [
    "dubai",
    "hongkong",
    "london",
    "singapore",
    "paris",
    "istanbul",
    "new york city",
    "rome",
    "macau",
    "moscow",
  ];
  return (
    <aside id={styles.contactsWrapper}>
      <WeatherCard weatherCity={cities[0]} />
      <WeatherCard weatherCity={cities[1]} />
      <WeatherCard weatherCity={cities[2]} />
      <WeatherCard weatherCity={cities[3]} />
      <WeatherCard weatherCity={cities[4]} />
      <WeatherCard weatherCity={cities[5]} />
      <WeatherCard weatherCity={cities[6]} />
      <WeatherCard weatherCity={cities[7]} />
      <WeatherCard weatherCity={cities[8]} />
      <WeatherCard weatherCity={cities[9]} />
    </aside>
  );
}

export default Wrapper;
