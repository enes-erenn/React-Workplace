// Packages and Dependencies
import CountUp from "react-countup";
// Styles
import styles from "./Country.module.css";

const Country = (props) => {
  return (
    <>
      <div className={styles.country}>
        <h3>{props.name}</h3>
        <div className={styles.container}>
          <div>
            <h4>Deaths</h4>
            <div>
              <CountUp
                className=""
                start={0}
                end={props.deaths}
                preserveValue={true}
                duration={2}
                separator=","
                decimals={0}
                decimal=","
              />
            </div>
          </div>
          <div>
            <h4>Infected</h4>
            <div>
              <CountUp
                className=""
                start={0}
                end={props.infected}
                preserveValue={true}
                duration={2}
                separator=","
                decimals={0}
                decimal=","
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;
