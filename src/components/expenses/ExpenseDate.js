import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-item__month">{month}</div>
      <div className="expense-item__day">{day}</div>
      <div className="expense-item__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
