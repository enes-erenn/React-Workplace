// Styles
import styles from "./MainCard.module.css";

function MainCard(props) {
  return (
    <div className={styles.container}>
      <p id={styles.cityName}>{props.inputCity}</p>
      <div className={styles.right}>
        <div className={styles.box__imgDeg}>
          <img className={styles.img} src={props.imgUrl} alt="" />
          <span>{props.inputDeg}°C</span>
        </div>
        <div className={styles.boxDescription}>
          <span>{props.inputDes}</span>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
