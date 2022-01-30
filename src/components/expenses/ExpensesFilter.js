// Styles
import styles from "./ExpensesFilter.module.css";

function ExpensesFilter(props) {
  function dropdownChangeHandler(e) {
    props.onChangeFilter(e.target.value);
  }
  return (
    <div className={styles.expensesFilter}>
      <label className={styles.filterHeading}>Filter by year</label>
      <select
        className={styles.filter}
        value={props.selected}
        onChange={dropdownChangeHandler}
      >
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
}

export default ExpensesFilter;
