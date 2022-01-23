import React from "react";
import styles from "./Main.module.css";
import WeatherAPI from "../WeatherAPI.js";
import { useState } from "react";

function Main(props) {
  const [inputCity = "Ankara", setInputCity] = useState();
  function cityChangeHandler(e) {
    setInputCity(e.target.value);
  }

  return (
    <main className={styles.viewportMain}>
      <div className={styles.outputContainer}>
        <div className={styles.searchedCity}>
          <WeatherAPI weatherCity={inputCity} />
        </div>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="search">Search a city:</label>
        <input type="text" id={styles.search} onChange={cityChangeHandler} />
        <input type="submit" id={styles.glass} value="🔍" />
      </div>
      <video className={styles.video} autoPlay muted loop>
        <source
          src="https://player.vimeo.com/external/216445899.sd.mp4?s=12a8bdab939bda39a710f02e093e069e55067719&profile_id=164&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video>
    </main>
  );
}

export default Main;
