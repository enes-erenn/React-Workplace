// Packages and Dependencies
import { useState } from "react";
// Styles
import styles from "./MarkdownPreviewer.module.css";
// Components
import Button from "../Button/Button.js";

const MarkdownPreviewer = () => {
  const [rawValue, setRawValue] = useState(
    "<h1 style='color: #fff;'>Hello</h1><br><h3 style='color: gray;'>This is a Markdown Previewer</h3><br><p>You can preview the HTML code here.</p><br><h6>6</h6><h5>5</h5><h4>4</h4><h3>3</h3><h2>2</h2><h1>1</h1>"
  );
  const rawValueChangeHandler = (e) => {
    setRawValue(e.target.value);
  };

  return (
    <div className={styles.app}>
      <Button />
      <header className={styles.header}>
        <h1>Markdown Previewer</h1>
      </header>
      <main className={styles.main}>
        <textarea
          value={rawValue}
          onChange={rawValueChangeHandler}
          className={styles.textarea}
        ></textarea>
        <div
          className={styles.textarea}
          readOnly={true}
          dangerouslySetInnerHTML={{ __html: rawValue }}
        ></div>
      </main>
    </div>
  );
};

export default MarkdownPreviewer;
