// Styles
import styles from "./ExpenseItem.module.css";
// Components
import ExpenseDate from "./ExpenseDate.js";
import Card from "./UI/Card.js";

function ExpenseItem(props) {
  return (
    <li>
      <Card className={styles.expenseItem}>
        <ExpenseDate date={props.date} />
        <div className={styles.expenseItem__description}>
          <h2>{props.title}</h2>
          <div className={styles.expenseItem__price}>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
