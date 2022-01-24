import React from "react";
import styles from "./Main.module.css";
import WeatherAPI from "../WeatherAPI.js";
import { useState, useEffect } from "react";

function Main(props) {
  const snowing =
    "https://player.vimeo.com/external/630011403.sd.mp4?s=64bb03b5dc16955ae38ea87cc1b6d3ff33321e0b&profile_id=164&oauth2_token_id=57447761";

  const raining =
    "https://player.vimeo.com/external/216445899.sd.mp4?s=12a8bdab939bda39a710f02e093e069e55067719&profile_id=164&oauth2_token_id=57447761";

  const [videoLink, setVideoLink] = useState();
  const [inputCity, setInputCity] = useState("Ankara");
  const [input, setInput] = useState();
  function citySubmitHandler(e) {
    e.preventDefault();
    setInputCity(input);
  }

  function inputChangeHandler(e) {
    setInput(e.target.value);
  }
  return (
    <main className={styles.viewportMain}>
      <form className={styles.inputContainer} onSubmit={citySubmitHandler}>
        <label htmlFor="search">Search a city:</label>
        <input
          type="text"
          id="input"
          className={styles.search}
          onChange={inputChangeHandler}
        />
        <input type="submit" className={styles.glass} value="🔍" />
      </form>
      <div className={styles.outputContainer}>
        <div className={styles.searchedCity}>
          <WeatherAPI weatherCity={inputCity} />
        </div>
      </div>
      <video className={styles.video} autoPlay muted loop>
        <source src={videoLink} type="video/mp4" />
      </video>
    </main>
  );
}

export default Main;
