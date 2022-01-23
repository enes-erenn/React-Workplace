import React from "react";
import styles from "./Card.module.css";
import WeatherAPI from "../WeatherAPI.js";

function WeatherCard(props) {
  return (
    <div className={styles.container}>
      <WeatherAPI weatherCity={props.weatherCity} />
    </div>
  );
}

export default WeatherCard;
