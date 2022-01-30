// Styles
import styles from "./ExpenseDate.module.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className={styles.expenseDate}>
      <div className={styles.expenseItem__month}>{month}</div>
      <div className={styles.expenseItem__day}>{day}</div>
      <div className={styles.expenseItem__year}>{year}</div>
    </div>
  );
}

export default ExpenseDate;
