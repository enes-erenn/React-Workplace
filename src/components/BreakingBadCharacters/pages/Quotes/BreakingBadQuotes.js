// Packages and Dependencies
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// Components
import {
  fetchAllQuotes,
  statusSelector,
  errorSelector,
  quotesSelector,
} from "../../../../store/QuotesSlice/QuotesSlice";
// Styles
import styles from "./BreakingBadQuotes.module.css";

const BreakingBadQuotes = () => {
  const dispatch = useDispatch();
  const quotes = useSelector(quotesSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllQuotes());
    }
  }, [dispatch, status]);

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li className={styles.header}>Breaking Bad</li>
          <div className={styles.pages}>
            <li className={styles.link}>
              <Link className={styles.link} to="/breakingbadcharacters">
                Characters
              </Link>
            </li>
            <li className={styles.link}>
              <Link className={styles.link} to="/breakingbadcharacters/quotes">
                Quotes
              </Link>
            </li>
          </div>
        </ul>
      </nav>
      <h1>Quotes</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "succeed" &&
        quotes.map((item) => <div className={styles.quotes}>{item.quote}</div>)}
    </div>
  );
};

export default BreakingBadQuotes;
