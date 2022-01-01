import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
}

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData}/>
    </div>
  );
}

export default NewExpense;
