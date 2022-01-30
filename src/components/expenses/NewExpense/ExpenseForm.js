// Packages
import { useState } from "react";
// Styles
import styles from "./ExpenseForm.module.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function TitleChangeHandler(e) {
    setEnteredTitle(e.target.value);
  };

  function AmountChangeHandler(e) {
    setEnteredAmount(e.target.value);
  };

  function DateChangeHandler(e) {
    setEnteredDate(e.target.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={SubmitHandler}>
      <div className={styles.newExpense__controls}>
        <div className={styles.newExpense__control}>
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={TitleChangeHandler}
          />
        </div>
        <div className={styles.newExpense__control}>
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={AmountChangeHandler}
          />
        </div>
        <div className={styles.newExpense__control}>
          <label>Date</label>
          <input
            type="date"
            min="2020-12-31"
            max="2022-12-31"
            value={enteredDate}
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className={styles.newExpense__actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
