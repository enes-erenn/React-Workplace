// Components
import Counter from "./Counter";
import styles from "./ReduxCounterApp.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Counter />;
    </div>
  );
}

export default App;
