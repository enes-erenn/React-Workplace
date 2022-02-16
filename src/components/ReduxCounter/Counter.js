import styles from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };
  const counter = useSelector((state) => state.counter);
  const toggleCounterHandler = () => {};

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      <div className={styles.value}>{counter}</div>
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
