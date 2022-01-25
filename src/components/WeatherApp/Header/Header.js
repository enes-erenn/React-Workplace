// Styles
import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <nav>
        <h2 id={styles.logo}>
          Ho
          <span id={styles.weather}>
            <span id={styles.w}>w</span>eather
          </span>
        </h2>
        <div id={styles.navLinks}>
          <a
            className={styles.navLink}
            href="https://github.com/thenesern/React-Workplace/tree/master/src/components/WeatherApp"
            target={"_blank"}
            rel="noreferrer"
          >
            Source Code
          </a>
          <a
            className={styles.navLink}
            href="https://openweathermap.org/"
            target={"_blank"}
            rel="noreferrer"
          >
            API
          </a>
          <a
            className={styles.navLink}
            href="https://github.com/thenesern"
            target={"_blank"}
            rel="noreferrer"
          >
            Author
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;