// Styles
import styles from "./AsideRight.module.css";

function AsideRight(props) {
  return (
    <div className={styles.asideRight}>
      <h3 className={styles.feelsHeader}>Feels Like</h3>
      <div className={styles.feelsLikes}>
        <div className={styles.feels}>
          <h3>Day:</h3>
          <p className={styles.feelsHeaders}>{props.feelsDay} °C</p>
        </div>
        <div className={styles.feels}>
          <h3>Night:</h3>
          <p className={styles.feelsHeaders}>{props.feelsNight} °C</p>
        </div>
        <div className={styles.feels}>
          <h3>Morning:</h3>
          <p className={styles.feelsHeaders}>{props.feelsMorn} °C</p>
        </div>
        <div className={styles.feels}>
          <h3>Evening:</h3>
          <p className={styles.feelsHeaders}>{props.feelsEve} °C</p>
        </div>
      </div>
    </div>
  );
}

export default AsideRight;
