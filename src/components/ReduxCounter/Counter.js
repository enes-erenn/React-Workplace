// Styles
import styles from "./Counter.module.css";
// Dependencies
import { useSelector, useDispatch } from "react-redux";
// Components
import { counterActions } from "../../store/index";

const Counter = () => {
  const show = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };
  const counter = useSelector((state) => state.counter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={styles.value}>{counter}</div>}
      <div>
        <button className={styles.button} onClick={incrementHandler}>
          Increment
        </button>
        <button className={styles.button} onClick={decrementHandler}>
          Decrement
        </button>
        <button className={styles.button} onClick={increaseHandler}>
          Increase by 5
        </button>
      </div>
      <button className={styles.button} onClick={toggleCounterHandler}>
        Toggle Counter
      </button>
    </main>
  );
};

export default Counter;
