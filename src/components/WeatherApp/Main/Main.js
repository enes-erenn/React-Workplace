// Packages
import { useState } from "react";
// Styles
import styles from "./Main.module.css";
// Components
import InputAPI from "../InputAPI";

function Main() {
  const [inputCity, setInputCity] = useState("Ankara");
  const [input, setInput] = useState();
  const [inputValue, setInputValue] = useState("");

  function citySubmitHandler(e) {
    e.preventDefault();
    setInputCity(input);
    setInputValue("");
  }

  function inputChangeHandler(e) {
    setInput(e.target.value);
    setInputValue(e.target.value);
  }

  return (
    <main className={styles.main}>
      <form className={styles.inputContainer} onSubmit={citySubmitHandler}>
        <label className={styles.header} htmlFor="search">
          Search a city:
        </label>
        <input
          type="text"
          id="input"
          className={styles.search}
          onChange={inputChangeHandler}
          value={inputValue}
        />
        <input type="submit" className={styles.glass} value="🔍" />
      </form>
      <div id="output" className={styles.outputContainer}>
        <InputAPI cityName={inputCity} />
      </div>
    </main>
  );
}

export default Main;
