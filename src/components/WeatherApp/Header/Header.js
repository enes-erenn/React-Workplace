import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <nav>
        <h2 id={styles.logo}>
          Ho
          <span id={styles.weather}>
            <span id={styles.w}>w</span>eather
          </span>
        </h2>
        <div id={styles.navLinks}>
          <a class={styles.navLink} href="/">
            App
          </a>
          <a class={styles.navLink} href="/">
            API
          </a>
          <a class={styles.navLink} href="/">
            Author
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
