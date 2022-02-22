// Packages
import { useState } from "react";
// Styles
import styles from "./ExpensesApp.module.css";
// Components
import Expenses from "./Expenses.js";
import NewExpense from "./NewExpense/NewExpense.js";
import Button from "../Button/Button.js";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 20,
    date: new Date(2022, 0, 3),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 399,
    date: new Date(2022, 0, 7),
  },
  {
    id: "e3",
    title: "Monitor",
    amount: 299,
    date: new Date(2022, 0, 15),
  },
  {
    id: "e4",
    title: "Phone",
    amount: 1099,
    date: new Date(2022, 0, 20),
  },
];

function ExpensesApp() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expenses) => {
    setExpenses((prevExpenses) => {
      return [expenses, ...prevExpenses];
    });
  };

  return (
    <div className={styles.container}>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <Button />
    </div>
  );
}

export default ExpensesApp;
