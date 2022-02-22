// Components
import Counter from "./Counter";
import styles from "./ReduxCounterApp.module.css";
import Button from "../Button/Button.js";

function App() {
  return (
    <div className={styles.container}>
      <Counter />;
      <Button />
    </div>
  );
}

export default App;
