import React from "react";
import styles from "./NotesForm.module.css";

const NotesForm = () => {
  return (
    <form className={styles.form}>
      <textarea
        autoFocus={true}
        className={styles.text}
        placeholder="Enter your note here..."
      ></textarea>
      <div className={styles.controls}>
        <div className={styles.colors}>
          <button className={styles.color}></button>
          <button className={styles.color}></button>
          <button className={styles.color}></button>
          <button className={styles.color}></button>
          <button className={styles.color}></button>
        </div>
        <button className={styles.add}>ADD</button>
      </div>
    </form>
  );
};

export default NotesForm;
