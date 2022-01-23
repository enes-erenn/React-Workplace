import React from "react";
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Wrapper from "./Wrapper/Wrapper.js";
import styles from "./WeatherApp.module.css";

function WeatherApp() {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log(position);
    },
    function (error) {
      console.error("Error Code = " + error.code + " - " + error.message);
    }
  );

  return (
    <div id={styles.weatherApp}>
      <Header />
      <Main />
      <Wrapper />
    </div>
  );
}

export default WeatherApp;
