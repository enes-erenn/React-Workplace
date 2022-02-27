// Packages and Dependencies
import { useState, useEffect } from "react";
import axios from "axios";
// Components
import Country from "../Country/Country.js";

const CountryAPI = (props) => {
  let country = props.country;
  const [deaths, setDeaths] = useState();
  const [infects, setInfects] = useState();
  useEffect(() => {
    axios(`https://covid19.mathdro.id/api/countries/${country}`).then((res) => {
      setDeaths(res.data.deaths.value);
      setInfects(res.data.confirmed.value);
    });
  }, [country]);

  return <Country deaths={deaths} name={country} infected={infects} />;
};

export default CountryAPI;
