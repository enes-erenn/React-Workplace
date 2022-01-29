// Styles
import styles from "./AsideLeft.module.css";

function Aside(props) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();

  return (
    <div className={styles.aside}>
      <div className={styles.days}>
        <div className={styles.day}>
          <h3 className={styles.dayName}>{weekday[date.getDay()]}</h3>
          <div>
            <img
              className={styles.img}
              src={props.dayOneIcon}
              alt="Weather Icon"
            />
            <span className={styles.deg}>
              {props.dayOne} °C / {props.nightOne} °C
            </span>
          </div>
          <div className={styles.Description}>
            <span className={styles.description}>
              {props.dayOneDescription}
            </span>
          </div>
        </div>
        <div className={styles.day}>
          <h3 className={styles.dayName}>{weekday[date.getDay() + 1]}</h3>
          <div>
            <img
              className={styles.img}
              src={props.dayTwoIcon}
              alt="Weather Icon"
            />
            <span className={styles.deg}>
              {props.dayTwo} °C / {props.nightTwo} °C
            </span>
          </div>
          <div className={styles.Description}>
            <span className={styles.description}>
              {props.dayTwoDescription}
            </span>
          </div>
        </div>
        <div className={styles.day}>
          <h3 className={styles.dayName}>{weekday[date.getDay() + 2]}</h3>
          <div>
            <img
              className={styles.img}
              src={props.dayThreeIcon}
              alt="Weather Icon"
            />
            <span className={styles.deg}>
              {props.dayThree} °C / {props.nightThree} °C
            </span>
          </div>
          <div className={styles.Description}>
            <span className={styles.description}>
              {props.dayThreeDescription}
            </span>
          </div>
        </div>
        <div className={styles.day}>
          <h3 className={styles.dayName}>{weekday[date.getDay() + 3]}</h3>
          <div>
            <img
              className={styles.img}
              src={props.dayFourIcon}
              alt="Weather Icon"
            />
            <span className={styles.deg}>
              {props.dayFour} °C / {props.nightFour} °C
            </span>
          </div>
          <div className={styles.Description}>
            <span className={styles.description}>
              {props.dayFourDescription}
            </span>
          </div>
        </div>
        <div className={styles.day}>
          <h3 className={styles.dayName}>{weekday[date.getDay() + 4]}</h3>
          <div>
            <img
              className={styles.img}
              src={props.dayFiveIcon}
              alt="Weather Icon"
            />
            <span className={styles.deg}>
              {props.dayFive} °C / {props.nightFive} °C
            </span>
          </div>
          <div className={styles.Description}>
            <span className={styles.description}>
              {props.dayFiveDescription}
            </span>
          </div>
        </div>
        <div className={styles.day}>
          <h3 className={styles.dayName}>{weekday[date.getDay() + 5]}</h3>
          <div>
            <img
              className={styles.img}
              src={props.daySixIcon}
              alt="Weather Icon"
            />
            <span className={styles.deg}>
              {props.daySix} °C / {props.nightSix} °C
            </span>
          </div>
          <div className={styles.Description}>
            <span className={styles.description}>
              {props.daySixDescription}
            </span>
          </div>
        </div>
        <div className={styles.day}>
          <h3 className={styles.dayName}>{weekday[date.getDay() + 6]}</h3>
          <div>
            <img
              className={styles.img}
              src={props.daySevenIcon}
              alt="Weather Icon"
            />
            <span className={styles.deg}>
              {props.daySeven} °C / {props.nightSeven} °C
            </span>
          </div>
          <div className={styles.Description}>
            <span className={styles.description}>
              {props.daySevenDescription}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aside;