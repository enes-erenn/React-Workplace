// Styles
import styles from "./AsideLeft.module.css";

function Aside(props) {
  return (
    <div className={styles.aside}>
      <div className={styles.days}>
        <div className={styles.day}>
          <h3 className={styles.dayName}>Day One</h3>
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
          <h3 className={styles.dayName}>Day Two</h3>
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
          <h3 className={styles.dayName}>Day Three</h3>
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
          <h3 className={styles.dayName}>Day Four</h3>
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
          <h3 className={styles.dayName}>Day Five</h3>
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
          <h3 className={styles.dayName}>Day Six</h3>
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
          <h3 className={styles.dayName}>Day Seven</h3>
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