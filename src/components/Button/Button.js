// Packages and Dependencies
import { Link } from "react-router-dom";
// Styles
import styles from "./Button.module.css";

const Button = () => {
  return (
    <Link to="/">
      <button className={styles.button}>&#x276E;</button>
    </Link>
  );
};

export default Button;
