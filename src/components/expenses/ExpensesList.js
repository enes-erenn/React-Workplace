// Styles
import styles from "./ExpensesList.module.css";
// Components
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  if (props.items.length === 0) {
    return (
      <h2 className={styles.expensesList__fallback}>Found no expenses.</h2>
    );
  }
  return (
    <ul className={styles.expensesList}>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
