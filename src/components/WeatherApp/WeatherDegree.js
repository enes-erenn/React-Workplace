import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function WeatherAPI() {
  const key = "17d0bd6b3e15f511805dc2b664935484";
  const [weather, setWeather] = useState();
  let city = "ankara";

  useEffect(() => {
    const getData = () => {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=tr`
        )

        .then((resp) => setWeather(resp.data.main.temp))
        .catch((err) => console.log(err))
    };

    getData();
  }, [city]);

  return (
    <div>
      <span>{weather}</span>
    </div>
  );
}

export default WeatherAPI;
