// Styles
import styles from "./Wrapper.module.css";
// Components
import CardAPI from "../CardAPI.js";

function Wrapper() {
  const cities = [
    "dubai",
    "hongkong",
    "london",
    "singapore",
    "paris",
    "istanbul",
    "new york city",
    "rome",
    "macau",
    "moscow",
  ];
  return (
    <aside id={styles.contactsWrapper}>
      <CardAPI weatherCity={cities[0]} />
      <CardAPI weatherCity={cities[1]} />
      <CardAPI weatherCity={cities[2]} />
      <CardAPI weatherCity={cities[3]} />
      <CardAPI weatherCity={cities[4]} />
      <CardAPI weatherCity={cities[5]} />
      <CardAPI weatherCity={cities[6]} />
      <CardAPI weatherCity={cities[7]} />
      <CardAPI weatherCity={cities[8]} />
      <CardAPI weatherCity={cities[9]} />
    </aside>
  );
}

export default Wrapper;
