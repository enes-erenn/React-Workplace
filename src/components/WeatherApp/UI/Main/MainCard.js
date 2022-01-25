// Styles
import styles from "./MainCard.module.css";

function MainCard(props) {
  return (
    <div className={styles.container}>
      <div className={styles.outputs}>
        <p id={styles.cityName}>{props.cityName}</p>
        <div className={styles.right}>
          <div className={styles.box__imgDeg}>
            <img className={styles.img} src={props.weatherIcon} alt="" />
            <span className={styles.deg}>{props.cityDeg}°C</span>
          </div>
          <div className={styles.boxDescription}>
            <span className={styles.deg}>{props.weatherDescription}</span>
          </div>
        </div>
      </div>
      <video className={styles.video} autoPlay muted loop>
        <source
          src={
            "https://player.vimeo.com/external/216445899.sd.mp4?s=12a8bdab939bda39a710f02e093e069e55067719&profile_id=164&oauth2_token_id=57447761"
          }
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default MainCard;