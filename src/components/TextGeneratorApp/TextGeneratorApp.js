// Packages and Dependencies
import { useState, useEffect } from "react";
import axios from "axios";
// Styles
import styles from "./TextGeneratorApp.module.css";
// Components
import Button from "../Button/Button.js";

const TextGeneratorApp = () => {
  const [value, setValue] = useState(10);
  const [response, setResponse] = useState("Loading...");

  const options = [
    {
      label: "Text",
      value: "Text",
    },
    {
      label: "HTML",
      value: "HTML",
    },
  ];
  const [selected, setSelected] = useState();
  const [type, setType] = useState("text");
  const inputChangeHandler = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    axios(
      `https://baconipsum.com/api/?type=all-meat&paras=${value}&format=${type}`,
      {
        method: "GET",
      }
    ).then((res) => setResponse(res.data));
  }, [value, type]);

  const handleChange = (e) => {
    setSelected(e.target.value);
    setType(e.target.value.toLowerCase());
  };
  return (
    <div className={styles.app}>
      <Button />
      <header>
        <h1 className={styles.heading}>React Text Generator</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.controls}>
          <div>
            <label htmlFor="paragraphs">Paragrahps: </label>
            <input
              id="paragraphs"
              type="number"
              value={value}
              onChange={inputChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="html">Type: </label>
            <select value={selected} onChange={handleChange}>
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
        <section className={styles.textarea}>
          <article className={styles.text}>{response}</article>
        </section>
      </main>
    </div>
  );
};

export default TextGeneratorApp;
