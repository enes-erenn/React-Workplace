// Packages and Dependencies
import { useState, useEffect } from "react";
import axios from "axios";
import CountUp from "react-countup";
// Styles
import styles from "./Covid19Tracker.module.css";
// Components
import CountryWrapper from "./Wrapper/CountryWrapper.js";
import Button from "../Button/Button.js";

const Covid19Tracker = (props) => {
  const [data, setData] = useState();
  const [start, setStart] = useState(false);

  useEffect(() => {
    axios("https://covid19.mathdro.id/api").then((res) => setData(res));
  }, []);

  setTimeout(() => setStart(true), 1000);
  return (
    <div className={styles.app}>
      <Button />
      <header className={styles.header}>
        <h1>COVID-19 Tracker</h1>
      </header>
      <main>
        <aside className={styles.aside}>
          <div className={styles.totals}>
            <div>
              <h4>Infected</h4>
              {start && (
                <CountUp
                  className=""
                  start={0}
                  end={data.data.confirmed.value}
                  preserveValue={true}
                  duration={2}
                  separator=","
                  decimals={0}
                  decimal=","
                />
              )}
            </div>
            <div>
              <h4>Deaths</h4>
              {start && (
                <CountUp
                  className=""
                  start={0}
                  end={data.data.deaths.value}
                  preserveValue={true}
                  duration={2}
                  separator=","
                  decimals={0}
                  decimal=","
                />
              )}
            </div>
          </div>
        </aside>
        <aside>
          <CountryWrapper />
        </aside>
      </main>
    </div>
  );
};

export default Covid19Tracker;
