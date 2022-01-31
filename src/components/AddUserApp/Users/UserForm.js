// Styles
import styles from "./UserForm.module.css";
// Components
import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import ErrorModal from "../UI/ErrorModal.js";
//Packages
import { useState, useRef } from "react";

const UserForm = (props) => {
  const [error, setError] = useState();
  const inputUsername = useRef();
  const inputUserAge = useRef();

  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName = inputUsername.current.value;
    const enteredUserAge = inputUserAge.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age.",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age.",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    inputUsername.current.value = "";
    inputUserAge.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={inputUsername} />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" ref={inputUserAge} />
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  );
};

export default UserForm;
