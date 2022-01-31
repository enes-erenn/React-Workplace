// Styles
import Card from "../UI/Card.js";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} {user.age} years old.
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
