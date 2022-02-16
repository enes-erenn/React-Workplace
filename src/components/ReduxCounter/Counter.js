import styles from "./Counter.module.css";

const Counter = () => {
  const toggleCounterHandler = () => {};

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      <div className={styles.value}>-- COUNTER VALUE --</div>
      <button className={styles.button} onClick={toggleCounterHandler}>
        Toggle Counter
      </button>
    </main>
  );
};

export default Counter;
