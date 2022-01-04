import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./WeatherAPI.css";

function WeatherAPI() {
  const key = "569e07fb109c0a84bf1f94765ccfcf4e";
  const [weatherDeg, setWeatherDeg] = useState();
  const [weatherIcon, setWeatherIcon] = useState();
  const [weatherCity, setWeatherCity] = useState();
  const [weatherDes, setWeatherDes] = useState();
  let city = "ankara";

  useEffect(() => {
    const getData = () => {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=tr`
        )
        .then((res) => {
          setWeatherCity(res.data.name);
          setWeatherIcon(res.data.weather[0].icon);
          setWeatherDeg(res.data.main.temp);
          setWeatherDes(res.data.weather[0].description);
          console.log(res);
        })
        .catch((err) => console.log(err));
    };

    getData();
  }, [city]);

  let imgUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

  return (
    <div className="box">
      <p>{weatherCity}</p>
      <div className="box__img-deg">
        <img src={imgUrl} alt="" />
        <span>{weatherDeg}°C</span>
      </div>
      <div className="box-description">
        <span>{weatherDes}</span>
      </div>
    </div>
  );
}

export default WeatherAPI;
