// Styles
import styles from "./BasicForm.module.css";
// Custom-Hook
import useInput from "../../../hooks/use-input.js";

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  const firstNameStyles = firstNameHasError
    ? `${styles["form-control"]} ${styles.invalid}`
    : styles["form-control"];

  const lastNameStyles = lastNameHasError
    ? `${styles["form-control"]} ${styles.invalid}`
    : styles["form-control"];

  const emailStyles = emailHasError
    ? `${styles["form-control"]} ${styles.invalid}`
    : styles["form-control"];

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(`${firstNameValue} ${lastNameValue} ${emailValue}`);
    resetFirstName();
    resetLastName();
    resetEmail();
  };
  
  return (
    <form onSubmit={submitHandler}>
      <div className={styles["control-group"]}>
        <div className={firstNameStyles}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className={styles["error-text"]}>Invalid First Name</p>
          )}
        </div>
        <div className={lastNameStyles}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className={styles["error-text"]}>Invalid Last Name</p>
          )}
        </div>
      </div>
      <div className={emailStyles}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className={styles["error-text"]}>Invalid Email</p>}
      </div>
      <div className={styles["form-actions"]}>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
