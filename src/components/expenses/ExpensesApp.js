import Expenses from "./Expenses.js";
import NewExpense from "./NewExpense/NewExpense.js";
import { useState } from "react";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 20,
    date: new Date(2021, 12, 3),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 399,
    date: new Date(2021, 12, 7),
  },
  {
    id: "e3",
    title: "Monitor",
    amount: 299,
    date: new Date(2021, 12, 15),
  },
  {
    id: "e4",
    title: "Phone",
    amount: 1099,
    date: new Date(2021, 12, 20),
  },
];
function ExpensesApp() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expenses) => {
    setExpenses(prevExpenses => {
      return [expenses, ...prevExpenses]
    })
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default ExpensesApp;
