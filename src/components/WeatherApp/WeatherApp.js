// Styles
import styles from "./WeatherApp.module.css";
// Components
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Wrapper from "./Wrapper/Wrapper.js";
import Button from "../Button/Button.js";

function WeatherApp() {
  return (
    <div id={styles.weatherApp}>
      <Header />
      <Main />
      <Wrapper />
      <Button />
    </div>
  );
}

export default WeatherApp;
