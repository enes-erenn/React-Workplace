// Styles
import styles from "./Card.module.css";

function WeatherCard(props) {
  return (
    <div className={styles.container}>
      <p id={styles.cityName}>{props.weatherCity}</p>
      <div className={styles.box__imgDeg}>
        <img className={styles.img}src={props.imgUrl} alt="" />
        <span>{props.weatherDeg}°C</span>
      </div>
      <div className={styles.boxDescription}>
        <span>{props.weatherDes}</span>
      </div>
    </div>
  );
}

export default WeatherCard;
