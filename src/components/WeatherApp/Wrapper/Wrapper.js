import React from "react";
import WeatherAPI from "../WeatherAPI.js";
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
      <WeatherAPI weatherCity={cities[0]} />
      <WeatherAPI weatherCity={cities[1]} />
      <WeatherAPI weatherCity={cities[2]} />
      <WeatherAPI weatherCity={cities[3]} />
      <WeatherAPI weatherCity={cities[4]} />
      <WeatherAPI weatherCity={cities[5]} />
      <WeatherAPI weatherCity={cities[6]} />
      <WeatherAPI weatherCity={cities[7]} />
      <WeatherAPI weatherCity={cities[8]} />
      <WeatherAPI weatherCity={cities[9]} />
    </aside>
  );
}

export default Wrapper;
