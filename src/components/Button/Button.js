import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = () => {
  return (
    <Link to="/">
      <button className={styles.button}>&#10094;</button>
    </Link>
  );
};

export default Button;
