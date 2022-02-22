// Styles
import styles from "./AddUserApp.module.css";
// Components
import UserForm from "./Users/UserForm.js";
import UsersList from "./Users/UsersList.js";
import Button from "../Button/Button.js";
// Packages
import { useState } from "react";

function AddUserApp() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className={styles.container}>
      <UserForm onAddUser={addUserHandler} />
      <UsersList users={usersList} />
      <Button />
    </div>
  );
}

export default AddUserApp;
