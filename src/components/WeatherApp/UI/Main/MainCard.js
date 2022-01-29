// Styles
import styles from "./MainCard.module.css";
// Packages
import { useRef, useEffect } from "react";

function MainCard(props) {
  const today = new Date();
  const date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

  const videoRef = useRef();
  const previousUrl = useRef(props.videoLink);

  useEffect(() => {
    if (previousUrl.current === props.videoLink) {
      return;
    }

    if (videoRef.current) {
      videoRef.current.load();
    }

    previousUrl.current = props.videoLink;
  }, [props.videoLink]);

  return (
    <div className={styles.container}>
      <div className={styles.outputs}>
        <p id={styles.cityName}>{props.cityName}</p>
        <div className={styles.box__imgDeg}>
          <img className={styles.img} src={props.weatherIcon} alt="" />
          <span className={styles.deg}>{props.cityDeg}°C</span>
        </div>
        <div className={styles.boxDescription}>
          <span id="description" className={styles.description}>
            {props.weatherDescription}
          </span>
        </div>
        <div className={styles.date}>{date}</div>
      </div>
      <video ref={videoRef} className={styles.video} autoPlay muted loop>
        <source src={props.videoLink} type="video/mp4" />
      </video>
    </div>
  );
}

export default MainCard;