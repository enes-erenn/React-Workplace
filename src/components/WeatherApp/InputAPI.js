// Packages and Dependencies
import axios from "axios";
import { useState, useEffect } from "react";
// Styles
import MainCard from "./UI/Main/MainCard.js";

function InputAPI(props) {
  const key = "569e07fb109c0a84bf1f94765ccfcf4e";
  const keyAlt2 = "9f949e67f057aba2e6be132cfadb0d5e";
  const [inputDeg, setInputDeg] = useState();
  const [inputIcon, setInputIcon] = useState();
  const [inputCity, setInputCity] = useState();
  const [inputDes, setInputDes] = useState();

  let city = props.inputCity;
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyAlt2}&units=metric&lang=en`
      )
      .then((res) => {
        setInputCity(res.data.name);
        setInputIcon(res.data.weather[0].icon);
        setInputDeg(res.data.main.temp);
        setInputDes(res.data.weather[0].description);
      })
      .catch((err) => console.log(err));
  }, [city]);

  let imgUrl = `http://openweathermap.org/img/wn/${inputIcon}@2x.png`;
  return (
    <>
      <MainCard
        inputCity={inputCity}
        inputDeg={inputDeg}
        imgUrl={imgUrl}
        inputDes={inputDes}
      />
    </>
  );
}

export default InputAPI;
