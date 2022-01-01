import Expenses from "./Expenses.js";
import NewExpense from "./NewExpense/NewExpense.js";

function ExpensesApp() {
  const expenses = [
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
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default ExpensesApp;
