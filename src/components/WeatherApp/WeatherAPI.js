// Packages and Dependencies
import axios from "axios";
import { useState, useEffect } from "react";
// Styles
import styles from "./WeatherApp.module.css";

function WeatherAPI(props) {
  const key = "569e07fb109c0a84bf1f94765ccfcf4e";
  const keyAlt = "165646a7eea43e8eae8c831b8da3d125";
  const keyAlt2 = "9f949e67f057aba2e6be132cfadb0d5e";
  const [weatherDeg, setWeatherDeg] = useState();
  const [weatherIcon, setWeatherIcon] = useState();
  const [weatherCity, setWeatherCity] = useState();
  const [weatherDes, setWeatherDes] = useState();

  let city = props.weatherCity;
  
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyAlt}&units=metric&lang=en`
      )
      .then((res) => {
        setWeatherCity(res.data.name);
        setWeatherIcon(res.data.weather[0].icon);
        setWeatherDeg(res.data.main.temp);
        setWeatherDes(res.data.weather[0].description);
      })
      .catch((err) => console.log(err));
  }, [city]);

  let imgUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
  return (
    <div>
      <p id={styles.cityName}>{weatherCity}</p>
      <div className={styles.box__imgDeg}>
        <img src={imgUrl} alt="" />
        <span>{weatherDeg}°C</span>
      </div>
      <div className={styles.boxDescription}>
        <span>{weatherDes}</span>
      </div>
    </div>
  );
}

export default WeatherAPI;
