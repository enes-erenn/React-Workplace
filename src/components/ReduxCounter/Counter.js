// Styles
import styles from "./Counter.module.css";
// Dependencies
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
// Components
import {
  increment,
  decrement,
  toggle,
  increase,
} from "../../store/CounterSlice/CounterSlice.js";

const Counter = () => {
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };
  const increaseHandler = () => {
    dispatch(increase(5));
  };
  const counter = useSelector((state) => state.counter.counter);
  const toggleCounterHandler = () => {
    dispatch(toggle());
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
