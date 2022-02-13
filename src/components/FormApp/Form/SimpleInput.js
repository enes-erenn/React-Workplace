import styles from "./SimpleInput.module.css";
import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const nameInputRef = useRef();
  const [isEnteredNameValid, setIsEnteredNameValid] = useState(true);

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (enteredName.trim() > 0) {
      setIsEnteredNameValid(true);
      console.log(enteredName);
      const enteredValue = nameInputRef.current.value;
      console.log(enteredValue);
      setEnteredName("");
    } else {
      setIsEnteredNameValid(false);
      return;
    }
  };
  const nameInputClasses = isEnteredNameValid
    ? styles["form-control"]
    : ` ${styles["form-control"]} ${styles.invalid}`;
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {!isEnteredNameValid && (
          <p className={styles["error-text"]}>Name is not valid.</p>
        )}
      </div>
      <div className={styles["form-actions"]}>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
