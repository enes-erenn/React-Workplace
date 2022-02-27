// Packages and Dependencies
import { useState, useEffect } from "react";
import axios from "axios";
// Styles
import styles from "./CountryWrapper.module.css";
// Components
import CountryAPI from "../CountryAPI/CountryAPI.js";

const CountryWrapper = () => {
  const [countries, setCountries] = useState();

  useEffect(() => {
    axios("https://covid19.mathdro.id/api/countries").then((data) =>
      setCountries(data.data.countries.map((c) => c.name))
    );
  }, []);
  return (
    <div className={styles.wrapper}>
      {countries &&
        countries.map((country) => <CountryAPI country={country} />)}
    </div>
  );
};

export default CountryWrapper;
