import React from "react";
import styles from "./Main.module.css";
import WeatherAPI from "../WeatherAPI.js";
import { useState } from "react";

function Main() {
  const [inputCity = "Ankara", setInputCity] = useState();
  function cityChangeHandler(e) {
    setInputCity(e.target.value);
  }

  return (
    <main class={styles.viewportHeader}>
      <video width="320" height="240" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>
      <div class={styles.inputContainer}>
        <label htmlFor="search">Search a city:</label>
        <input type="text" id={styles.search} onChange={cityChangeHandler} />
        <input type="submit" id={styles.glass} value="🔍" />
      </div>
      <div class={styles.outputContainer}>
        <WeatherAPI weatherCity={inputCity} />
      </div>
    </main>
  );
}

export default Main;
