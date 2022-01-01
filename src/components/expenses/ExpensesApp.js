import ExpenseItem from "./ExpenseItem";

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
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default ExpensesApp;
